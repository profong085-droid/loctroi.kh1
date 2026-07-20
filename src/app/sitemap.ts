import { MetadataRoute } from 'next'
import { productsData } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loctroi.online';
  const currentDate = new Date();
  const locales = ['kh', 'en', 'vi', 'zh', 'hi', 'ja', 'ko', 'ar'];

  const getAlternates = (path: string) => ({
    languages: {
      'km-KH': `${baseUrl}/kh${path}`,
      'en-US': `${baseUrl}/en${path}`,
      'vi-VN': `${baseUrl}/vi${path}`,
      'zh-CN': `${baseUrl}/zh${path}`,
      'hi-IN': `${baseUrl}/hi${path}`,
      'ja-JP': `${baseUrl}/ja${path}`,
      'ko-KR': `${baseUrl}/ko${path}`,
      'ar-AE': `${baseUrl}/ar${path}`,
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

  // ៣. ទំព័រសំខាន់ៗ (Corporate Pages)
  const corporateRoutes: MetadataRoute.Sitemap = [];
  const corpPages = ['about', 'contact', 'branches', 'farmer-meetings', 'quiz'];
  corpPages.forEach(page => {
    locales.forEach(locale => {
      corporateRoutes.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: getAlternates(`/${page}`),
      });
    });
  });

  // ៤. ទំព័រប្រភេទ (Category Pages)
  const categoryRoutes: MetadataRoute.Sitemap = [];
  const categoryIds = ['all', 'molluscicide', 'herbicide', 'insecticide', 'fungicide', 'fertilizer', 'seed', 'special'];
  categoryIds.forEach(cat => {
    locales.forEach(locale => {
      categoryRoutes.push({
        url: `${baseUrl}/${locale}/category/${cat}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: getAlternates(`/category/${cat}`),
      });
    });
  });

  return [
    ...homeRoutes,
    ...corporateRoutes,
    ...categoryRoutes,
    ...productRoutes,
  ];
}
