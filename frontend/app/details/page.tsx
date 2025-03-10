import RecentlyAdded from '../components/Recently';
import Lenses from '../components/Lenses';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
import ProductImage from '../components/details/ProductImage';
import ProductDetails from '../components/details/ProductDetails';
import CustomerRatings from '../components/details/CustomerRatings';
import CustomerReviews from '../components/details/CustomerReviews';

export default function Home() {
  return (
    <>
      {/* Product Section */}
      <div className="flex flex-col md:flex-row relative">    
        <ProductImage />
        <ProductDetails />
      </div>

      {/* Ratings & Reviews Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Ratings */}
          <div className="lg:w-1/3">
            <CustomerRatings />
          </div>
          
          {/* Right Column - Reviews */}
          <div className="lg:w-2/3">
            <CustomerReviews />
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <RecentlyAdded />
      <Lenses />
      <Testimonial />
      <Footer />
      <BottomBar />
    </>
  );
}
