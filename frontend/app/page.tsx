import Category from './components/home/Category';
import Slider from './components/home/Slider';
import Categories from './components/home/Categories';
import BrowseByShape from './components/product/BrowseByShape';
import RecentlyAdded from './components/home/Recently';
import Lenses from './components/product/Lenses';
import Testimonial from './components/common/Testimonial';
import Footer from './components/layout/Footer';
import BottomBar from './components/layout/BottomBar';

export default function Home() {
  return (
    <>
      <Category />
      <Slider />
      <Categories />
      <BrowseByShape />
      <RecentlyAdded />
      <Lenses />
      <Testimonial />
      <Footer />
      <BottomBar />
    </>
  );
}
