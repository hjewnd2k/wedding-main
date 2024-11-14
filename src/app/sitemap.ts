import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://huyen-hieu-wedding.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
