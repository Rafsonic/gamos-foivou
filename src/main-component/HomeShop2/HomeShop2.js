import { Fragment } from "react";
import api from "../../api";
import BlogSection from "../../components/BlogSection/BlogSection";
import Categorys from "../../components/Categorys/Categorys";
import Footer from "../../components/footer/Footer";
import Hero12 from "../../components/hero12/hero12";
import Navbar from "../../components/Navbar/Navbar";
import OfferBanner3 from "../../components/OfferBanner3/OfferBanner3";
import PartnerSection from "../../components/PartnerSection";
import Product2 from "../../components/Product2/Product2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart, addToWishList } from "../../store/actions/action";

const HomeShop2 = ({ addToCart, addToWishList }) => {
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
      <Navbar hclass={"wpo-header-style-4"} />
      <Hero12 />
      <PartnerSection pClass={"pb-0"} />
      <Categorys />
      <OfferBanner3 />
      <Product2
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      <BlogSection bgClass={"section-bg"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomeShop2;
