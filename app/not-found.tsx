// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-center space-y-6 w-full max-w-lg px-4">
          <div className="space-y-2">
            <AlertCircle className="h-24 w-24 mx-auto text-primary animate-bounce" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
              404
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Sayfa Bulunamadı
            </h2>
            <p className="mt-4 text-muted-foreground">
              Aradığınız sayfaya ulaşılamıyor. Sayfa kaldırılmış veya adresi
              değişmiş olabilir.
            </p>
          </div>
          <div className="space-y-4">
            <Link href="/">
              <Button className="gap-2">
                <Home className="h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
