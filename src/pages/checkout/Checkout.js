import { CircularProgress } from "@mui/material";
import axios from "../../axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/button/Button";
import "./Checkout.css";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function Checkout() {
  const [productDetails, setProductDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [load, setLoad] = useState(true);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const { id } = useParams();
  // const PF = "http://localhost:5000/imgs/products/";
  const PF = `${process.env.REACT_APP_API_PUB}/products/`;

  useEffect(() => {
    try {
      const fetchData = async () => {
        await axios.get(`/products/${id}`).then((res) => {
          console.log(res.data?.data);
          setProductDetails(res.data?.data);
          setLoad(false);
        });
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCheckout = async (id) => {
    try {
      setIsFetching(true);
      await axios.post(`/orders/checkout-session/${id}`).then((res) => {
        console.log(res);
        if (res.data?.status == "success") {
          window.location.href = res.data.session.url;
        } else {
          setError(true);
          error && setErrorMessage("Error! Checkout not completed.");
          setIsFetching(false);
        }
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response?.statusText);
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="checkout">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      {!load ? (
        <div className="checkout" key={productDetails._id}>
          <div className="checkout__img">
            <img
              src={PF + productDetails.thumbnail}
              alt=""
              crossOrigin="anonymous"
            />
          </div>
          <h3>name : {productDetails.name}</h3>
          <h3> category : {productDetails.category}</h3>
          <h3> sub category : {productDetails.subCategory}</h3>
          <h3> stock : {productDetails.countInStock}</h3>
          <h3> price : ${productDetails.price}</h3>
          <h3> delivery fee : ${productDetails.deliveryFee}</h3>

          <div onClick={() => handleCheckout(productDetails._id)}>
            <Button
              text={
                isFetching ? (
                  <CircularProgress size={16} color="inherit" />
                ) : (
                  "checkout"
                )
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Checkout;
