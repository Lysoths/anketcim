"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthFormProps } from "@/types/supabase";
import { signIn, signUp } from "@/lib/auth-utilts";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthForm({ view }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom") || "/dashboard";

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    fullName: "",
    loading: false,
    error: null as string | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      if (view === "login") {
        const { error } = await signIn(formState.email, formState.password);
        if (error) throw error;
        router.push(redirectedFrom);
        router.refresh();
      } else {
        // Önce auth sistemi üzerinden kullanıcı oluştur
        const { data: authData, error: signUpError } =
          await supabase.auth.signUp({
            email: formState.email,
            password: formState.password,
            options: {
              data: {
                full_name: formState.fullName,
              },
            },
          });

        if (signUpError) throw signUpError;

        // Kullanıcı başarıyla oluşturulduysa users tablosuna ekle
        if (authData.user) {
          const { error: profileError } = await supabase.from("users").insert({
            id: authData.user.id,
            email: formState.email,
            full_name: formState.fullName,
            password_hash: "", // Auth sisteminde şifre zaten saklanıyor
            notification_preferences: { email: true, push: true },
          });

          if (profileError) throw profileError;

          // Burayı değiştiriyoruz
          setFormState((prev) => ({
            ...prev,
            loading: false,
            // error yerine success state ekleyebiliriz ama şimdilik Alert'i kullanarak rengi değiştirelim
            error:
              "✅ Kayıt başarılı! Lütfen e-posta adresinize gönderilen doğrulama bağlantısına tıklayın.",
          }));
        }
      }
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {view === "login" ? "Giriş Yap" : "Kayıt Ol"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formState.error && (
              <Alert
                variant={
                  formState.error.includes("✅") ? "default" : "destructive"
                }
              >
                <AlertDescription>{formState.error}</AlertDescription>
              </Alert>
            )}

            {view === "register" && (
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground"
                >
                  Ad Soyad
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={formState.fullName}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  required
                  placeholder="Ad Soyad"
                  className="mt-1"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                E-posta
              </label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                placeholder="ornek@email.com"
                className="mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Şifre
              </label>
              <Input
                id="password"
                type="password"
                value={formState.password}
                onChange={(e) =>
                  setFormState((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                required
                placeholder="********"
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={formState.loading}
            >
              {formState.loading
                ? "İşleniyor..."
                : view === "login"
                ? "Giriş Yap"
                : "Kayıt Ol"}
            </Button>

            <div className="text-center text-sm">
              {view === "login" ? (
                <p>
                  Hesabınız yok mu?{" "}
                  <Link
                    href="/auth/register"
                    className="text-primary hover:text-primary/90"
                  >
                    Kayıt olun
                  </Link>
                </p>
              ) : (
                <p>
                  Zaten hesabınız var mı?{" "}
                  <Link
                    href="/auth/login"
                    className="text-primary hover:text-primary/90"
                  >
                    Giriş yapın
                  </Link>
                </p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
