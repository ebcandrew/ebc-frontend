import axios from "../../axios";
import React, { useState } from "react";
import "./EditProducts.css";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function EditProducts() {
  const [productDetails, setProductDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [load, setLoad] = useState(false);

  const [thumbnail, setThumbnail] = useState(null);
  const [sub, setSub] = useState("");
  const [cat, setCat] = useState("");
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fee, setFee] = useState("");

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const { id } = useParams();

  const defaults = () => {
    setPrice(productDetails.price);
    setCat(productDetails.category);
    setSub(productDetails.subCategory);
    setStock(productDetails.countInStock);
    setName(productDetails.name);
    setFee(productDetails.deliveryFee);
  };

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        await axios.get(`/products/${id}`).then((res) => {
          setProductDetails(res.data?.data);
          setLoad(true);
          defaults();
        });
      };

      fetchProduct();
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsFetching(false);
    }
  }, [load]);

  const updateProduct = async () => {
    const objectData = {
      name: name,
      category: cat,
      subCategory: sub,
      price: price,
      countInStock: stock,
      // thumbnail: thumbnail,
      deliveryFee: fee,
    };

    try {
      await axios.patch(`/products/${id}`, objectData).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/shop";
      });
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="editblog">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="addblog__form">
        <div>
          <p>name</p>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <p>price</p>

          <input
            type="text"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <p>category</p>

          <input
            type="text"
            required
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
        </div>

        <div>
          <p>sub category</p>
          <input
            type="text"
            required
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
        </div>

        <div>
          <p>delivery fee</p>
          <input
            type="text"
            required
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>

        {/* <input
          required
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          id="fileInput"
          style={{ display: "none", cursor: "pointer" }}
        /> */}

        {/* {file && (
          <div className="blog__image__preview">
            <img src={URL.createObjectURL(file)} alt="" />
          </div>
        )} */}

        {/* <label htmlFor="fileInput" style={{ cursor: "pointer", fontSize: 40 }}>
          <div className="btn__submit">
            <Button text={"upload image"} />
          </div>
        </label> */}

        <div className="btn__submit" onClick={updateProduct}>
          <Button
            text={
              isFetching ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                "submit"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
