import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import './globals.css';

const navigation = {
  0: {
    id: 'nav-products',
    displayName: 'Products',
    subNav: {
      0: {
        id: 'subNav-clientGallery',
        displayName: 'Client Gallery',
        description: 'Better way to share, deliver, proof and sell photos',
        href: '/'
      },
      1: {
        id: 'subNav-website',
        displayName: 'Website',
        description: 'Build a beautiful portfolio website',
        href: '/'
      },
      2: {
        id: 'subNav-studioManager',
        displayName: 'Studio Manager',
        description: 'Photography business manager',
        href: '/'
      }
    }
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
