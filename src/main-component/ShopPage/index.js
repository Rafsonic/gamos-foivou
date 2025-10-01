import { Fragment } from "react";
import api from "../../api";
import Navbar from "../../components/Navbar/Navbar";
import ShopProduct from "../../components/ShopProduct";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart, addToWishList } from "../../store/actions/action";

const ShopPage = ({ addToCart, addToWishList }) => {
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
      <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
      <section className="wpo-shop-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ShopProduct
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ShopPage;
