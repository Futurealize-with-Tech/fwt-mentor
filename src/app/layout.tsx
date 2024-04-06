import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Provider } from 'jotai';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import MentorsDataProvider from '@/middleware/MentorsDataProvider'
import CurrentMentorProvider from '@/middleware/CurrentMentorProvider'
import { MentorType } from '@/types/mentorType'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Provider>
          <MentorsDataProvider mentors={mentorsData}>
            <CurrentMentorProvider>
              {children}
            </CurrentMentorProvider>
          </MentorsDataProvider>
        </Provider>
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
    </html>
  )
}
