import { Metadata } from "next";

export const FAQMetadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently Asked Questions',
  keywords: ['nextjs', 'seo', 'metadata'],
  authors: [{ name: 'John Doe', url: 'https://bexatm.com' }],
  openGraph: {
    title: 'F and Q',
    description: 'Frequently Asked Questions in BexATm',
    url: 'https://bexatm.com',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  
}