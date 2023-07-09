import axios from "../../axios";
import React, { useState } from "react";
import "./AddProduct.css";
import Button from "../../components/button/Button";
import { CircularProgress } from "@mui/material";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function AddProduct() {
  const [thumbnail, setThumbnail] = useState(null);
  const [sub, setSub] = useState("");
  const [cat, setCat] = useState("");
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fee, setFee] = useState("");

  const [catModal, setCatModal] = useState(false);
  const [subCatModal, setSubCatModal] = useState(false);

  const categories = ["men", "women", "kids"];
  const subCategories = [
    "t-shirts",
    "jerseys",
    "nft",
    "hoodies",
    "bags",
    "hats",
  ];

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  };

  const handleSubmit = async () => {
    setIsFetching(true);
    const formData = new FormData();

    console.log(cat);

    formData.append("thumbnail", thumbnail);
    formData.append("images", thumbnail);
    formData.append("name", name);
    formData.append("subCategory", sub);
    formData.append("countInStock", stock);
    formData.append("category", cat);
    formData.append("price", price);
    formData.append("deliveryFee", fee);

    try {
      await axios.post("/products", formData, config).then((res) => {
        console.log(res);
        setSuccess(true);
        setSuccessMessage("success");
        window.location.href = "/shop";
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage("Error. Make sure all fields are filled up");
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="addproducts">
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
          <p>stock</p>

          <input
            type="text"
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div>
          <p>category</p>

          <input
            type="text"
            readOnly
            required
            value={cat}
            onClick={(e) => setCatModal(!catModal)}
          />
        </div>

        {catModal && (
          <div className="catmodal">
            {categories.map((item, index) => {
              return (
                <div className="catmodal__item" key={index}>
                  <p
                    onClick={() => {
                      setCat(item);
                      setCatModal(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div>
          <p>sub category</p>

          <input
            type="text"
            readOnly
            required
            value={sub}
            onClick={(e) => setSubCatModal(!subCatModal)}
          />
        </div>

        {subCatModal && (
          <div className="catmodal">
            {subCategories.map((item, index) => {
              return (
                <div className="catmodal__item" key={index}>
                  <p
                    onClick={() => {
                      setSub(item);
                      setSubCatModal(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}

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
          <p>delivery fee</p>

          <input
            type="text"
            required
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>
        <input
          required
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          id="fileInput"
          style={{ display: "none", cursor: "pointer" }}
        />

        {thumbnail && (
          <div className="blog__image__preview">
            <img src={URL.createObjectURL(thumbnail)} alt="" />
          </div>
        )}

        <label htmlFor="fileInput" style={{ cursor: "pointer", fontSize: 40 }}>
          <div className="btn__submit">
            <Button text={"upload image"} />
          </div>
        </label>

        <div className="btn__submit" onClick={handleSubmit}>
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

export default AddProduct;
