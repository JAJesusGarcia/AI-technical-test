import { Inter } from 'next/font/google';
import { AuthProvider } from '@/context/auth-context';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Navbar } from '@/components/Navbar/navbar';
import { Footer } from '@/components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Technical Test - Cancer Detection',
  description: 'Advanced cancer detection using artificial intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
