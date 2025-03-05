import "./globals.css";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mt-8">
      <TopBar />
      <NavBar />
        {children}
      </body>
    </html>
  );
}
