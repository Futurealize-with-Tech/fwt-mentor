'use client';

import { Inter } from 'next/font/google'
import { useEffect } from "react";
import { useAtom } from "jotai";
import { mentorKey } from "@/lib/key/key";
import { usePathname, useRouter } from "next/navigation";
import { isScrollInvalidAtom } from '@/atoms/atoms';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootTemplate({ children } : { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrollInvalid] = useAtom(isScrollInvalidAtom);

  useEffect(() => {
    const currentMentorId = localStorage.getItem(mentorKey);
    if (pathname !== '/' && currentMentorId === null) {
      router.push('/');
    } else if (pathname === '/' && currentMentorId !== null) {
      router.push('/thanks');
    }
  }, [pathname]);

  return (
    <body
      className={inter.className}
      style={{ overflow: isScrollInvalid ? 'hidden' : '' }}
    >
      {children}
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className='toast'
      />
    </body>
  );
}
