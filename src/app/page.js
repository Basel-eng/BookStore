import { Faq } from "./_components/Faq";
import { Filter } from "./_components/Filter";
import { Hero } from "./_components/Hero";
import { MobileGallery } from "./_components/MobileGallyary";



const Home = () => {
  return (
    <div>
      <Hero/>
      <MobileGallery/>
      <Filter/>
      <Faq/>
    </div>
  )
}

export default Home;
