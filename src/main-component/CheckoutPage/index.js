import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import CheckoutSection from "../../components/CheckoutSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const CheckoutPage = ({ cartList }) => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-3"} />
      <PageTitle pageTitle={"Checkout"} pagesub={"Checkout"} />
      <CheckoutSection cartList={cartList} />
      <Footer footerClass={"wpo-site-footer-s2"} />
      <Scrollbar />
    </Fragment>
  );
};

export default CheckoutPage;
