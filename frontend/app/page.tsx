import Category from './components/Category';
import Slider from './components/Slider';
import Categories from './components/Categories';
import BrowserByShoap from './components/BrowserByShoap';
import RecentlyAdded from './components/Recently';
export default function Home() {
  return (
    <>
      <Category />
      <Slider />
      <Categories />
      <BrowserByShoap />
      <RecentlyAdded />
    </>
  );
}
