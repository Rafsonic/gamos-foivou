import { Fragment } from "react";
import api from "../../api";
import About2 from "../../components/about2/about2";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import FunFact from "../../components/FunFact/FunFact";
import Hero10 from "../../components/hero10/hero10";
import Navbar from "../../components/Navbar/Navbar";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import Product from "../../components/Product";
import RsvpSectionS8 from "../../components/RsvpSectionS8/RsvpSectionS8";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSectionS3 from "../../components/ServiceSection3/ServiceSection3";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial2 from "../../components/Testimonial2/Testimonial2";
import VideoSection from "../../components/VideoSection";
import vImg from "../../images/video-img/img-4.jpg";
import { addToCart, addToWishList } from "../../store/actions/action";

const HomePlanner3 = ({ addToCart, addToWishList }) => {
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
      <Navbar hclass={"wpo-header-style-2"} />
      <Hero10 />
      <FunFact fClass={"section-padding pb-0"} />
      <About2 />
      <VideoSection vimg={vImg} vClass={"wpo-video-section-s2 pt-120"} />
      <ServiceSectionS3 />
      <Testimonial2 tClass={"wpo-testimonial-section-s3"} />
      <OfferBanner />
      <TeamSection />
      <RsvpSectionS8 />
      <Product
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      <BlogSection bgClass={"section-bg"} />
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePlanner3;
