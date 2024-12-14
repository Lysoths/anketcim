"use client";
import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/lib/supabase";

const ClientSideNavigation = () => {
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsDashboard(pathName.startsWith("/dashboard"));
  }, [pathName]);

  if (!isMounted || isDashboard) return null;

  return <Navigation />;
};

export default dynamic(() => Promise.resolve(ClientSideNavigation), {
  ssr: false,
});
