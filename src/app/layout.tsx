import type { Metadata } from 'next'
import './globals.scss'
import { Provider } from 'jotai';

import MentorsDataProvider from '@/middleware/MentorsDataProvider'
import CurrentMentorProvider from '@/middleware/CurrentMentorProvider'
import { MentorType } from '@/types/mentorType'

export const metadata: Metadata = {
  title: 'Futurealize with Tech！メンターサイト',
  description: '卒業メンターさん！！ メンバーや在留メンターからの手紙をお楽しみください！！！',
}

async function getMentorsData() {
  const res = await fetch('https://api.futurealize-with.tech/api/v1/mentors');

  const data = await res.json();
  return data.mentors as MentorType[];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mentorsData = await getMentorsData();

  return (
    <html lang='ja'>
      <Provider>
        <MentorsDataProvider mentors={mentorsData}>
          <CurrentMentorProvider>
            {children}
          </CurrentMentorProvider>
        </MentorsDataProvider>
      </Provider>
    </html>
  )
}
