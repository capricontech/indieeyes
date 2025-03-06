import Category from './components/Category';
import Slider from './components/Slider';
import Categories from './components/Categories';
import BrowseByShape from './components/BrowseByShape';
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
      <BrowseByShape />
      <RecentlyAdded />
      <Lenses />
      <Testimonial />
      <Footer />
      <BottomBar />
    </>
  );
}
