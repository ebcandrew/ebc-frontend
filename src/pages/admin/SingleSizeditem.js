import React, { useState } from "react";
import { LeagueBanner } from "../../components/imports/imgs/Images";
import "./singlesizeditem.css";
import { Product2 } from "../../components/imports/imgs/Images";
import { PagesDropdown } from "../AdminComponents/ManageTournaments";

export default function SingleSizedItem() {
  const [color, setColor] = useState();
  return (
    <>
      <div className="AdminJerseyTemplateSection">
        <div className="AdminJerseyHeaderSection">
          <div className="AdminJerseyHeaderContent">
            <h1 className="HeaderTitle">
              ADMIN <br /> PANEL
            </h1>
            <p className="HeaderLink">
              See how it works? <span className="DemoText">Live Demo</span>
            </p>
          </div>

          <div className="AdminJerseyVideoPlayer">
            <img src={LeagueBanner} alt="" />
          </div>
        </div>

        <PagesDropdown />

        <div className="AdminUploadSection">
          <h1 className="UploadTitle">ONE SIZED ITEMS TEMPLATE</h1>

          <div className="SizedItemTemplate">
            <div className="ItemWrapper">
              <img src={Product2} alt="" />
              <button className="ItemUploadBTN">UPLOAD IMAGE</button>
            </div>

            <div className="ItemDetailContainer">
              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Color</label>
                <select className="ItemSelect" name="style">
                  <option value=""></option>
                  <option value="MALE">Valor</option>
                  <option value="FEMALE">Instinct</option>
                  <option value="OTHERS">Mystic</option>
                </select>
              </div>

              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Category</label>
                <select className="ItemSelect" name="style">
                  <option value=""></option>
                  <option value="MALE">Valor</option>
                  <option value="FEMALE">Instinct</option>
                  <option value="OTHERS">Mystic</option>
                </select>
              </div>

              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Sub Category</label>
                <select className="ItemSelect" name="style">
                  <option value=""></option>
                  <option value="MALE">Valor</option>
                  <option value="FEMALE">Instinct</option>
                  <option value="OTHERS">Mystic</option>
                </select>
              </div>

              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Quantity</label>
                <input
                  min={1}
                  max={64}
                  type="text"
                  className="ItemSelect"
                  name=""
                  id=""
                />
                <label className="ItemLabel">Max 64</label>
              </div>

              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Price</label>
                <input
                  min={1}
                  max={64}
                  type="text"
                  className="ItemSelect"
                  name=""
                  id=""
                />
                <label className="ItemLabel">REG 129.99</label>
                <label className="ItemLabel">SALE 99.99</label>
              </div>

              <div className="ItemDetailWrapper">
                <label className="ItemLabel">Additional Notes</label>
                <input type="textArea" className="ItemSelect" name="" id="" />
              </div>

              <button className="UploadItemBTN">Post Inventory</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
