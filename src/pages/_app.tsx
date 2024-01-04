import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import './globals.css';

const navigation = {
  0: {
    id: 'nav-products',
    displayName: 'Products',
    href: '/'
  },
  1: {
    id: 'nav-showcase',
    displayName: 'Showcase',
    href: '/'
  },
  2: {
    id: 'nav-pricing',
    displayName: 'Pricing',
    href: '/'
  }
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar navigation={navigation} />
      <Component {...pageProps} />
    </>
  );
}
