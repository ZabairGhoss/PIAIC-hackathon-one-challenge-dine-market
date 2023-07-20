import FeaturedProduct from '@/views/FeaturedProduct'
import Hero from '@/views/Hero'
import ProductsSlider from '@/views/ProductsSlider'
import Promotion from '@/views/Promotion'

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotion />
      <ProductsSlider />
      <FeaturedProduct />
    </main>
  )
}
