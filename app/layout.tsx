import '@/app/ui/global.css';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
