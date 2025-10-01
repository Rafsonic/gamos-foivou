import { Fragment } from "react";
import api from "../../api";
import BlogSection from "../../components/BlogSection/BlogSection";
import Categorys2 from "../../components/Category2/Categorys2";
import FunFact from "../../components/FunFact/FunFact";
import Navbar from "../../components/Navbar/Navbar";
import OrderProcess from "../../components/OrderProcess/OrderProcess";
import Product3 from "../../components/Product3/Product3";
import Testimonial2 from "../../components/Testimonial2/Testimonial2";
import Footer from "../../components/footer/Footer";
import Hero14 from "../../components/hero14/hero14";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart, addToWishList } from "../../store/actions/action";

const HomeShop4 = ({ addToCart, addToWishList }) => {
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
      <Navbar hclass={"wpo-header-style-5"} />
      <Hero14 />
      <FunFact fClass={"section-padding"} />
      <Categorys2 />
      <OrderProcess />
      <Product3
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      <Testimonial2 tClass={"wpo-testimonial-section-s3  pt-1 pb-120"} />
      <BlogSection bgClass={"section-bg"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomeShop4;
