'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { MentorType } from "@/types/mentorType";
import { mentorKey } from "@/lib/key/key";
import { MentorsDataContext } from "./MentorsDataProvider";
import { usePathname } from "next/navigation";

export const CurrentMentorContext = createContext<MentorType | null>(null);

export default function CurrentMentorProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const [currentMentor, setCurrentMentor] = useState<MentorType | null>(null);
  const mentors = useContext(MentorsDataContext);
  const pathname = usePathname();

  useEffect(() => {
    const mentorIdData = localStorage.getItem(mentorKey);
    if (mentorIdData) {
      const mentorId = JSON.parse(mentorIdData) as number;
      const mentor = mentors.find((mentor) => mentor.id === mentorId);

      if (mentor) {
        setCurrentMentor(mentor);
      }
    }
  }, [pathname]);

  return (
    <CurrentMentorContext.Provider value={currentMentor}>
      {children}
    </CurrentMentorContext.Provider>
  );
};

