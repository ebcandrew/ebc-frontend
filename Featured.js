import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Blog1, Blog2, Blog3 } from "../imports/imgs/Images";
import Heading from "../text/Heading";
import "./Featured.css";

function Featured() {
  const [featured, setFeatured] = useState([]);
  error.response.data?.error._message = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/imgs/blogs/`;


  useEffect(() => {
    try {
      const fetchFeatured = async () => {
        await axios.get("/blogs").then((res) => {
          setFeatured(res.data?.data);
          console.log(res);
          // console.log(featured);
        });
      };

      fetchFeatured();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const cards = [
    {
      img: Blog1,
      tag: "export",
      date: "9 july 2020",
      title: " 'Shark' tactics in the...",
      excerpt:
        "Vestibulum ac lorem facilisis, consectetur lectus vitae,  semper magna. Nunc sagittis, mauris eu congue...",
    },

    {
      img: Blog2,
      tag: "export",
      date: "24 july 2020",
      title: "why are there so few...",
      excerpt:
        "Vestibulum ac lorem facilisis, consectetur lectus vitae,  semper magna. Nunc sagittis, mauris eu congue...",
    },

    {
      img: Blog3,
      tag: "export",
      date: "3 august 2020",
      title: "teamwork makes the...",
      excerpt:
        "Vestibulum ac lorem facilisis, consectetur lectus vitae,  semper magna. Nunc sagittis, mauris eu congue...",
    },
  ];

  return (
    <div className="featured">
      <Heading text={"latest news"} />
      <div className="featured__heading">
        {/* <div className="header__footer__arrows">
          <p>
            <img src={Left} alt="" />
          </p>

          <p>
            <img src={Right} alt="" />
          </p>
        </div> */}
      </div>

      <div className="featured__container">
        {featured?.map((card, index) => {
          let even;

          if ((index + 1) % 2 === 0) {
            even = index;
          }

          return (
            <div className="featured__container__card" key={index}>
              <a href={`/blog/${card._id}`} style={{ textDecoration: "none" }}>
                <div className="card__img">
                  {/* <img src={Blog1} alt="" /> */}

                  <img
                    src={PF + card.thumbnail}
                    alt=""
                    crossOrigin="anonymous"
                  />
                  <p>{card.description}</p>
                </div>

                <div className="card__date">{card.date}</div>

                {even ? (
                  <div className="card__title" id="red">
                    {card.title}
                  </div>
                ) : (
                  <div className="card__title">{card.title}</div>
                )}
                <div className="card__excerpt">{card.blogBody}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
