import { Fragment } from "react";
import api from "../../api";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Hero11 from "../../components/hero11/hero11";
import Navbar from "../../components/Navbar/Navbar";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import OfferBanner2 from "../../components/OfferBanner2/OfferBanner2";
import Product from "../../components/Product";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSectionS4 from "../../components/ServiceSection4/ServiceSection4";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial2 from "../../components/Testimonial2/Testimonial2";
import { addToCart, addToWishList } from "../../store/actions/action";

const HomeShop1 = ({ addToCart, addToWishList }) => {
  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const addToWishListProduct = (product) => {
    addToWishList(product);
  };

  const products = productsArray;

  return (
    <Fragment>
      <Navbar />
      <Hero11 />
      <ServiceSectionS4 />
      <OfferBanner2 />
      <Product
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      <Testimonial2 tClass={"wpo-testimonial-section-s3 pt-0"} />
      <OfferBanner />
      <TeamSection />
      <BlogSection bgClass={"section-bg"} />
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default HomeShop1;
