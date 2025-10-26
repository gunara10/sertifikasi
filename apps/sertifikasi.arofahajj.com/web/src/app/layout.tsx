import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sertifikasi Arofahajj - Platform Sertifikasi Perizinan Terpadu',
  description: 'Platform digital revolusioner untuk pengurusan sertifikasi dan perizinan, khususnya PPIU (Penyelenggara Perjalanan Ibadah Umrah)',
  keywords: ['sertifikasi', 'PPIU', 'Haji', 'Umrah', 'perizinan', 'Kementerian Agama'],
  authors: [{ name: 'Arofahajj Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="relative flex min-h-screen bg-background">
              <div className="flex-1">
                {children}
              </div>
            </div>
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}