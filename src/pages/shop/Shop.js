import axios from ".././../axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import "./Shop.css";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";
import { CircularProgress } from "@mui/material";

function Shop() {
  // const PF = "http://localhost:5000/imgs/products/";
  const PF = `${process.env.REACT_APP_API_PUB}/products/`;

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const [shopItems, setShopItems] = useState([]);
  const [items, setItems] = useState(shopItems);
  const [userDetails, setUserDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [filterObj, setFilterObj] = useState({
    men: false,
    women: false,
    kids: false,
    all: true,
  });

  const handleChange = (choice) => {
    if (choice === "men") {
      setFilterObj({
        women: false,
        men: !filterObj.men,
        kids: false,
        all: false,
      });

      const filter = shopItems.filter((e) => e.category === "men");
      return setItems(filter);
    }

    if (choice === "women") {
      setFilterObj({
        men: false,
        kids: false,
        women: !filterObj.women,
        all: false,
      });

      const filter = shopItems.filter((e) => e.category === "women");
      return setItems(filter);
    }

    if (choice === "kids") {
      setFilterObj({
        men: false,
        women: false,
        kids: !filterObj.kids,
        all: false,
      });

      const filter = shopItems.filter((e) => e.category === "kids");
      return setItems(filter);
    }

    if (choice === "all") {
      setFilterObj({
        men: false,
        women: false,
        kids: false,
        all: true,
      });

      // const filter = shopItems.filter((e) => e.category === "kids");
      return setItems(shopItems);
    }
  };

  const [filterSub, setFilterSub] = useState({
    tshirts: false,
    jerseys: false,
    nft: false,
    hoodies: false,
    bags: false,
    hats: false,
  });

  const handleSub = (choice) => {
    if (choice === "t-shirts") {
      setFilterObj({
        tshirts: !filterSub.tshirts,
        jerseys: false,
        nft: false,
        hoodies: false,
        bags: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "t-shirts");
      return setItems(filter);
    }

    if (choice === "nft") {
      setFilterObj({
        nft: !filterSub.nft,
        jerseys: false,
        tshirts: false,
        hoodies: false,
        bags: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "nft");
      return setItems(filter);
    }

    if (choice === "jerseys") {
      setFilterObj({
        jerseys: !filterSub.jerseys,
        nft: false,
        tshirts: false,
        hoodies: false,
        bags: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "jerseys");
      return setItems(filter);
    }

    if (choice === "hoodies") {
      setFilterObj({
        hoodies: !filterSub.hoodies,
        jerseys: false,
        nft: false,
        tshirts: false,
        bags: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "hoodies");
      return setItems(filter);
    }

    if (choice === "bags") {
      setFilterObj({
        bags: !filterSub.bags,
        jerseys: false,
        nft: false,
        hoodies: false,
        tshirts: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "bags");
      return setItems(filter);
    }

    if (choice === "hats") {
      setFilterObj({
        hats: !filterSub.hats,
        tshirts: false,
        nft: false,
        hoodies: false,
        bags: false,
        hats: false,
      });

      const filter = shopItems.filter((e) => e.subCategory === "hats");
      return setItems(filter);
    }
  };

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        await axios.get("/products").then((res) => {
          setShopItems(res.data?.data);
          setItems(res.data?.data);
        });
      };

      const fetchUser = async () => {
        await axios.get("/users/me").then((res) => {
          setUserDetails(res.data?.data);
        });
      };

      fetchProducts();
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  const handleDeleteProduct = async (id) => {
    setIsFetching(true);
    try {
      await axios.delete(`/products/${id}`).then((res) => {
        setSuccess(true);
        success && setSuccessMessage("iproduct deleted");
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shop">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="shop__banner">
        <div className="shop__banner__text">
          <h3>shop</h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>
        </div>
      </div>

      <div className="shop__btn__select">
        <div className="leaderboard__btns">
          {filterObj.all ? (
            <div className="btn" id="first">
              <Button text={"all"} />
            </div>
          ) : (
            <div className="btn" onClick={() => handleChange("all")}>
              <Button text={"all"} />
            </div>
          )}

          {filterObj.men ? (
            <div className="btn" id="first">
              <Button text={"men"} />
            </div>
          ) : (
            <div className="btn" onClick={() => handleChange("men")}>
              <Button text={"men"} />
            </div>
          )}

          {filterObj.women ? (
            <div className="btn" id="first">
              <Button text={"women"} />
            </div>
          ) : (
            <div className="btn" onClick={() => handleChange("women")}>
              <Button text={"women"} />
            </div>
          )}

          {filterObj.kids ? (
            <div className="btn" id="first">
              <Button text={"kids"} />
            </div>
          ) : (
            <div className="btn" onClick={() => handleChange("kids")}>
              <Button text={"kids"} />
            </div>
          )}
        </div>
      </div>

      <div className="shop__items">
        <div className="tournamentbt__body__item shop__body__item">
          <div className="item__btn">
            {filterSub.nft ? (
              <Curved text={"NFTS"} />
            ) : filterSub.tshirts ? (
              <Curved text={"TSHIRTS"} />
            ) : filterSub.bags ? (
              <Curved text={"BAGS"} />
            ) : filterSub.hats ? (
              <Curved text={"HATS"} />
            ) : filterSub.hoodies ? (
              <Curved text={"HOODIES"} />
            ) : filterSub.jerseys ? (
              <Curved text={"JERSEYS"} />
            ) : (
              <Curved text={"OTHERS"} />
            )}
          </div>

          <div className="other__items__2">
            {filterSub.nft ? (
              <div className="btn" id="first">
                <h3>nfts</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("nft")}>
                <h3>nfts</h3>
              </div>
            )}

            {filterSub.jerseys ? (
              <div className="btn" id="first">
                <h3>jerseys</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("jerseys")}>
                <h3>jerseys</h3>
              </div>
            )}

            {filterSub.hoodies ? (
              <div className="btn" id="first">
                <h3>hoodies</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("hoodies")}>
                <h3>hoodies</h3>
              </div>
            )}

            {filterSub.bags ? (
              <div className="btn" id="first">
                <h3>bags</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("bags")}>
                <h3>bags</h3>
              </div>
            )}
            {filterSub.hats ? (
              <div className="btn" id="first">
                <h3>hats</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("hats")}>
                <h3>hats</h3>
              </div>
            )}

            {filterSub.tshirts ? (
              <div className="btn" id="first">
                <h3>t-shirts</h3>
              </div>
            ) : (
              <div className="btn" onClick={() => handleSub("t-shirts")}>
                <h3>t-shirts</h3>
              </div>
            )}
          </div>
        </div>

        <div className="shop__items__cards">
          {items?.map((item, index) => {
            return (
              <div className="shop__items__cards__item" key={item._id}>
                <a
                  href={`/products/${item._id}`}
                  className="shop__items__cards__item__img"
                >
                  <img
                    src={PF + item.thumbnail}
                    alt=""
                    crossOrigin="anonymous"
                  />
                </a>

                <h3>{item.name}</h3>
                <h3>${item.price}</h3>
                <a
                  href={`/products/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button text={"purchase now"} />
                </a>
                {/*
                {userDetails.role === "admin" && (
                  <>
                    <a
                      href={`/editproducts/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        text={
                          isFetching ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : (
                            "edit product"
                          )
                        }
                      />
                    </a>

                    <div onClick={() => handleDeleteProduct(item._id)}>
                      <Button
                        text={
                          isFetching ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : (
                            "delete product"
                          )
                        }
                      />
                    </div>
                  </>
                )} */}
              </div>
            );
          })}

          {/* <div className="shop__items__cards__item__btn">
            <Button text={"load more"} />
          </div> */}
        </div>
        {shopItems?.length > 10 && (
          <div className="shop__items__cards__item__btn">
            <Button text={"load more"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
