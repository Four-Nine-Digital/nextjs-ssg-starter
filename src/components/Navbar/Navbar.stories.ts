import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Global/Navbar',
  component: Navbar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigation: {
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
    }
  }
};
