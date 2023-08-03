import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Classified App',
  description: 'Classified App is a free platform that allows users to buy/sell/rent almost anything, find jobs or workers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
