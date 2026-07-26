import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BTS STUDIOS | The Future of Film is Decentralized',
  description: "The world's first decentralized Web3 & Bitcoin-empowered film production studio, streaming network & metaverse ecosystem.",
  keywords: ['BTS Studios', 'XBTS', 'Decentralized Film', 'OP_CAT', 'Web3 Cinema', 'Bitcoin', 'Metaverse', 'GULP Streaming'],
  openGraph: {
    title: 'BTS STUDIOS | The Future of Film is Decentralized',
    description: "The world's first decentralized Web3 & Bitcoin-empowered film production studio.",
    url: 'https://bts.network',
    siteName: 'BTS Studios',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
