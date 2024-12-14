"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FilePlus,
  FileText,
  BarChart,
  User,
  Settings,
  Menu,
  Home,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { signOut } from "@/lib/auth-utilts";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const sidebarItems = [
    {
      title: "Anasayfa",
      href: "/",
      icon: Home,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Anket Oluştur",
      href: "/dashboard/create",
      icon: FilePlus,
    },
    {
      title: "Anketlerim",
      href: "/dashboard/surveys",
      icon: FileText,
    },
    {
      title: "İstatistikler",
      href: "/dashboard/statistics",
      icon: BarChart,
    },
    {
      title: "Profil",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Ayarlar",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen transition-transform bg-card border-r ",
        isOpen ? "w-64" : "w-16",
        "md:relative md:translate-x-0"
      )}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-2 rounded-lg hover:bg-accent group",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : ""
                )}
              >
                <item.icon className="w-5 h-5" />
                {isOpen && (
                  <span className="ml-3 whitespace-nowrap">{item.title}</span>
                )}
              </Link>
            </li>
          ))}
          <Button onClick={() => signOut()} disabled={isLoading}>
            <LogOut className="w-5 h-5" />
            {isLoading ? "Çıkış yapılıyor..." : "Çıkış Yap"}
          </Button>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
