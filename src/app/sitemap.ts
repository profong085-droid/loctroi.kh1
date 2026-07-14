import { MetadataRoute } from 'next'
import { productsData } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loctroi.online';

  const productsUrls = productsData.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productsUrls,
  ]
}
