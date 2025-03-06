import Category from './components/Category';
import Slider from './components/Slider';
import Categories from './components/Categories';
import BrowserByShoap from './components/BrowserByShoap';
import RecentlyAdded from './components/Recently';
import Lenses from './components/Lenses';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import BottomBar from './components/BottomBar';

export default function Home() {
  return (
    <>
      <Category />
      <Slider />
      <Categories />
      <BrowserByShoap />
      <RecentlyAdded />
      <Lenses />
      <Testimonial />
      <Footer />
      <BottomBar />
    </>
  );
}
