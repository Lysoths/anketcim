"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function AuthModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Hoş Geldiniz
            </h2>
            <p className="text-sm text-muted-foreground">
              Devam etmek için giriş yapın veya kayıt olun
            </p>
          </div>
          <div className="grid gap-4">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Giriş Yap</Button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Kayıt Ol
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
