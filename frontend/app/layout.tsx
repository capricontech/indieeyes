import "./globals.css";
import TopBar from './components/layout/TopBar';
import NavBar from './components/layout/NavBar';
import Providers from './providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IndieEyes - Premium Eyewear',
  description: 'Shop premium eyewear at IndieEyes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mt-8">
        <Providers>
          <TopBar />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
