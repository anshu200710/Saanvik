import CategoryCarousel from "../components/CategoryCarousel";
import Hero from "../components/Hero";
import ProductsList from "../components/ProductList";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ProductsList />
      <CategoryCarousel/>
      <Testimonials />
    </div>
  );
};

export default Home;
