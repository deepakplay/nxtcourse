import { Roboto } from 'next/font/google';
import './globals.css';
import {
  ClerkProvider
} from '@clerk/nextjs';
import Header from '@/components/header';


const inter = Roboto({ subsets: ['latin'], weight: ['300','400','500', '700'] })

export const metadata = {
  title: 'NXT Course',
  description: 'Example of stripe and clerk auth',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} w-full min-h-screen flex flex-col `}>
          <Header />
          <main className="flex w-full container mx-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
