"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { LogOut, UserCircle2, Layout, ArrowRight } from "lucide-react";
import { signOut } from "@/lib/auth-utilts";
import { DialogTitle } from "@radix-ui/react-dialog";

export function AuthModal({ children, isAdmin, user }: any) {
  const [isOpen, setIsOpen] = useState(false);

  if (isAdmin) {
    const initials = user?.user_metadata?.full_name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase();

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-0">
          <div className="p-6 bg-gradient-to-b from-primary/10 to-background">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="text-lg">{initials}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Hoş Geldin
                  </h2>
                </DialogTitle>
                <p className="text-muted-foreground font-medium">
                  {user?.user_metadata?.full_name}
                </p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <Layout className="h-4 w-4" />
                    Dashboard'a git
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Button
                onClick={() => signOut()}
                variant="ghost"
                className="w-full text-destructive hover:text-destructive justify-start gap-2"
              >
                <LogOut className="h-4 w-4" />
                Çıkış Yap
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="p-6">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <UserCircle2 className="h-10 w-10 text-primary" />
            </div>
            <div className="text-center">
              <DialogTitle>
                <h2 className="text-2xl font-semibold tracking-tight mb-1">
                  Hoş Geldiniz
                </h2>
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                Devam etmek için giriş yapın veya kayıt olun
              </p>
            </div>
          </div>

          <div className="space-y-3 flex flex-col">
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full justify-between">
                <span>Giriş Yap</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/register" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-between">
                <span>Kayıt Ol</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
