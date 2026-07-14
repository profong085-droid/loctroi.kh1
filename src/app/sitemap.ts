import { MetadataRoute } from 'next'
import { productsData } from '@/data/products'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loctroi.online';
  const currentDate = new Date();

  // ១. ទំព័រដើម (Homepage) - អាទិភាពខ្ពស់បំផុត
  const homeRoute: MetadataRoute.Sitemap[number] = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
  };

  // ២. ទំព័រផលិតផលទាំងអស់ (Product Pages) - អាទិភាពបន្ទាប់
  const productRoutes: MetadataRoute.Sitemap = productsData.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: currentDate, // គួរដាក់កាលបរិច្ឆេទដែលផលិតផលនេះត្រូវកែប្រែចុងក្រោយ
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // ប្រសិនបើថ្ងៃក្រោយអ្នកមានទំព័រផ្សេងៗទៀត ដូចជា /about, /contact, /blog អាចបន្ថែមនៅទីនេះបាន

  return [
    homeRoute,
    ...productRoutes,
  ];
}
