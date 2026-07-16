import { MetadataRoute } from 'next'
import { productsData } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loctroi.online';
  const currentDate = new Date();
  const locales = ['kh', 'en', 'vi'];

  const getAlternates = (path: string) => ({
    languages: {
      'km-KH': `${baseUrl}/kh${path}`,
      'en-US': `${baseUrl}/en${path}`,
      'vi-VN': `${baseUrl}/vi${path}`,
    }
  });

  // ១. ទំព័រដើម (Homepage) - សម្រាប់គ្រប់ភាសា
  const homeRoutes: MetadataRoute.Sitemap = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: getAlternates(''),
  }));

  // ២. ទំព័រផលិតផលទាំងអស់ (Product Pages) - សម្រាប់គ្រប់ភាសា
  const productRoutes: MetadataRoute.Sitemap = [];
  productsData.forEach((product) => {
    locales.forEach(locale => {
      productRoutes.push({
        url: `${baseUrl}/${locale}/product/${product.id}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: getAlternates(`/product/${product.id}`),
      });
    });
  });

  return [
    ...homeRoutes,
    ...productRoutes,
  ];
}
