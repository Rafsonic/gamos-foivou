import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { addToCart } from "../../store/actions/action";
import ProductTabs from "./alltab";
import Product from "./product";

const ProductSinglePage = (props) => {
  const { slug } = useParams();

  const productsArray = api();
  const Allproduct = productsArray;

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const { addToCart } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(
      Allproduct.filter((Allproduct) => Allproduct.slug === String(slug))
    );
  }, []);

  const item = product[0];

  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} />
      <PageTitle pageTitle={"Product Single"} pagesub={"Product Single"} />
      <section className="wpo-shop-single-section section-padding">
        <div className="container">
          {item ? <Product item={item} addToCart={addToCartProduct} /> : null}
          <ProductTabs />
        </div>
      </section>
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ProductSinglePage;
