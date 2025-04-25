import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Ferrara Auto Center',
  description: 'Serviços de Lanternagem, Pintura, Troca de Para-brisa e muito mais!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}