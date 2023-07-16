'use client'

import { ThemeProvider } from 'next-themes'

export default function ({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
