import { client } from '@/lib/sanity.client'
import FeaturedProduct from '@/views/FeaturedProduct'
import Hero from '@/views/Hero'
import Newsletter from '@/views/Newsletter'
import ProductsSlider from '@/views/ProductsSlider'
import Promotion from '@/views/Promotion'

export const getProductsData = async () => {
  const result = await client.fetch(`*[_type=='product']{
    title,
    description,
  }`);
  return result;
}

export default async function Home() {
  
  const products = await getProductsData();
  console.log('Products Here...', products);
  
  
  return (
    <main>
      <Hero />
      <Promotion />
      <ProductsSlider />
      <FeaturedProduct />
      <Newsletter />
    </main>
  )
}
