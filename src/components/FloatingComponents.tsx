"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const LiveChat = dynamic(() => import("@/components/LiveChat").then(mod => mod.LiveChat), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop").then(mod => mod.ScrollToTop), { ssr: false });

export function FloatingComponents() {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/kh' || pathname === '/vi';

  return (
    <>
      {isHomePage && <LiveChat />}
      <ScrollToTop />
    </>
  );
}
