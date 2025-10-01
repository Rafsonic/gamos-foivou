import { Fragment } from "react";
import api from "../../api";
import About from "../../components/about/about";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import FunFact from "../../components/FunFact/FunFact";
import Hero9 from "../../components/hero9/hero9";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioSectionS3 from "../../components/PortfolioSectionS3/PortfolioSectionS3";
import Product from "../../components/Product";
import RsvpSectionS7 from "../../components/RsvpSectionS7/RsvpSectionS7";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSectionS2 from "../../components/ServiceSection2/ServiceSection2";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial2 from "../../components/Testimonial2/Testimonial2";

const HomePlanner2 = ({ addToCart, addToWishList }) => {
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
      <Navbar hclass={"wpo-header-style-3"} />
      <Hero9 />
      <About />
      <FunFact fClass={"section-padding pt-0"} />
      <ServiceSectionS2 />
      <Testimonial2 tClass={"pb-0"} />
      <PortfolioSectionS3 />
      <TeamSection />
      <RsvpSectionS7 />
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

export default HomePlanner2;
