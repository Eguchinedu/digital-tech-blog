import { ToastContainer } from "react-toastify"

export const metadata = {
  title: 'Digital Tech Blog',
  description: 'Auth page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
