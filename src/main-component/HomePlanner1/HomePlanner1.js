import { Fragment } from "react";
import api from "../../api";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import FunFact from "../../components/FunFact/FunFact";
import HeaderTopbar from "../../components/HeaderTopbar/HeaderTopbar";
import Hero8 from "../../components/hero8/hero8";
import Navbar from "../../components/Navbar/Navbar";
import PricingSection from "../../components/PricingSection/PricingSection";
import Product from "../../components/Product";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import RsvpSectionS5 from "../../components/RsvpSectionS5/RsvpSectionS5";
import Scrollbar from "../../components/scrollbar/scrollbar";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import { addToCart, addToWishList } from "../../store/actions/action";

const HomePlanner1 = ({ addToCart, addToWishList }) => {
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
      <HeaderTopbar />
      <Navbar hclass={"wpo-header-style-3"} />
      <Hero8 />
      <ServiceSection sClass={"pt-0"} />
      <ProjectSection prClass={"section-bg"} />
      <FunFact fClass={"pt-120"} />
      <Testimonial />
      <TeamSection />
      <RsvpSectionS5 />
      <Product
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      <PricingSection pClass={"pt-0"} />
      <BlogSection bgClass={"section-bg"} />
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePlanner1;
