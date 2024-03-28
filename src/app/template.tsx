'use client';

import { mentorKey } from "@/lib/key/key";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootTemplate({ children } : { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentMentorId = localStorage.getItem(mentorKey);
    if (pathname !== '/' && currentMentorId === null) {
      router.push('/');
    } else if (pathname === '/' && currentMentorId !== null) {
      router.push('/thanks');
    }
  }, [pathname]);

  return children;
}
