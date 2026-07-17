"use client";

import dynamic from "next/dynamic";

const LiveChat = dynamic(() => import("@/components/LiveChat").then(mod => mod.LiveChat), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop").then(mod => mod.ScrollToTop), { ssr: false });

export function FloatingComponents() {
  return (
    <>
      <LiveChat />
      <ScrollToTop />
    </>
  );
}
