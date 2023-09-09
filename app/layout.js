import { Inter } from 'next/font/google'
import { UserContextProvider } from './user'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          {children}
        </UserContextProvider>

      </body>
    </html>
  )
}
