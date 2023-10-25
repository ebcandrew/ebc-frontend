import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import {
  CalendarMonthIcon,
  // FacebookIcon,
  // InstagramIcon,
  ShareIcon,
  SmsIcon,
  // TwitterIcon,
  YouTubeIcon,
} from "../../components/imports/icons/Icons";
import {
  Blog1,
  Blog2,
  Blog3,
  BlogImage,
  Gamebanner,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Blog.css";

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  InstapaperIcon,
} from "react-share";
import { Link } from "react-router-dom";

function Blog() {
  // {
  //   image: BlogImage,
  //   headline: "headline here",
  //   date: "9 JULY 2020",
  //   excerpt: "'Shark' tactics in the...",
  // },

  const [blogPost, setBlogPost] = useState([]);
  const [blogPopular, setBlogPopular] = useState([]);
  const [blogRelated, setBlogRelated] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const PF = "http://localhost:5000/blogs/";
  // const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/blogs/`;
  // const url = "http://localhost:5000";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const url = process.env.REACT_APP_API_PUB_SOCIALS;

  useEffect(() => {
    try {
      const fetchPost = async () => {
        await axios.get("/blogs").then((res) => {
          // console.log(res.data?.data);
          setBlogPost(res.data?.data);
        });
      };

      const fetchPopular = async () => {
        await axios.get("/blogs/get/popular").then((res) => {
          // console.log(res.data?.data);
          setBlogPopular(res.data?.data);
        });
      };

      const fetchRelated = async () => {
        await axios.get("/blogs/get/related").then((res) => {
          // console.log(res.data?.data);
          setBlogRelated(res.data?.data);
        });
      };

      const fetchUser = async () => {
        await axios("/users/me").then((res) => {
          console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      fetchPost();
      fetchPopular();
      fetchRelated();
      fetchUser();
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

  const popular = [
    {
      image: Blog1,
      name: "INDIESPORT 2020",
      date: "August 2-10",
    },

    {
      image: Blog1,
      name: "INDIESPORT 2020",
      date: "August 2-10",
    },

    {
      image: Blog1,
      name: "INDIESPORT 2020",
      date: "August 2-10",
    },

    {
      image: Blog1,
      name: "INDIESPORT 2020",
      date: "August 2-10",
    },

    {
      image: Blog1,
      name: "INDIESPORT 2020",
      date: "August 2-10",
    },
  ];

  return (
    <div className="blog gameselect">
      <div className="gameselect__banner">
        <div className="gameselect__banner__text">
          <h3>Blogs</h3>
          <p>
            Welcome to ebc.gg, your ultimate online destination for top- quality
            jerseys, exclusive subscriptions, stylish hoodies, and much more! At
            ebc.gg, we blend passion for sports and fashion, offering a curated
            selection of premium products to cater to your unique tastes and
            interests. Whether you're a sports enthusiast looking for the
            perfect jersey to support your favorite team, a gaming aficionado
            seeking exclusive subscriptions, or someone who simply wants to stay
            cozy in our trendy hoodies, you've come to the right place. Explore
            our user-friendly online store and discover a world of high-quality
            apparel, accessories, and subscriptions tailored just for you.
            Embrace your style, express your passion, and elevate your wardrobe
            with ebc.gg. Let your shopping journey begin!
          </p>
          {userDetails?.role === "admin" && (
            <>
              <div className="blog__post__heading">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/addblog"}
                >
                  <Heading text={"Add Blog"} />
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="gameselect__banner__img">
          <img src={Gamebanner} alt="" />
        </div>
      </div>

      <div className="blog__post">
        <div>
          <div className="blog__post__heading">
            <Heading text={"Blog posts"} />
          </div>

          <div className="blog__post__items">
            {blogPost.map((blog, index) => {
              console.log(blog);
              const truncateTitle = (title) => {
                const words = title.split(" ");
                if (words.length > 4) {
                  return words.slice(0, 4).join(" ") + "...";
                }
                return title;
              };
              return (
                <div className="blog__post__items__card" key={index}>
                  <div className="blog__post__items__card__img">
                    <Link
                      to={`/blog/${blog._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={
                          // PF +
                          blog.thumbnail
                        }
                        alt=""
                        id="blogimg"
                        crossOrigin="anonymous"
                      />

                      <div>-{blog.title}</div>
                    </Link>
                  </div>

                  <div className="blog__post__items__card__others">
                    <Link
                      to={`/blog/${blog._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="excerpt">
                        <p className="date">{formatDate(blog.date)}</p>

                        <p className="excerpt">
                          {truncateTitle(blog.blogBody)}
                        </p>
                      </div>
                    </Link>

                    <p className="socials">
                      <p id="share">
                        <ShareIcon />
                      </p>

                      <p>
                        {/* <FacebookIcon /> */}
                        <FacebookShareButton url={`${url}/fb/${blog._id}`}>
                          <FacebookIcon size={32} />
                        </FacebookShareButton>
                      </p>

                      <p>
                        {/* <InstagramIcon /> */}

                        <InstapaperShareButton
                          url={`${url}/instagram/${blog._id}`}
                        >
                          <InstapaperIcon size={32} />
                        </InstapaperShareButton>
                      </p>

                      <p>
                        {/* <SmsIcon /> */}

                        <FacebookMessengerShareButton
                          url={`${url}/share/fb/${blog._id}`}
                        >
                          <FacebookMessengerIcon size={32} />
                        </FacebookMessengerShareButton>
                      </p>

                      <p>
                        {/* <TwitterIcon /> */}

                        <TwitterShareButton url={`${url}/twitter/${blog._id}`}>
                          <TwitterIcon size={32} />
                        </TwitterShareButton>
                      </p>

                      <p>
                        <YouTubeIcon />
                      </p>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {blogPost.length > 10 && (
            <div className="blog__loadmore">
              <Button text={"load more"} />
            </div>
          )}
        </div>

        <div className="blog__popular">
          <div className="blog__popular__heading">
            <Heading text={"popular posts"} />
          </div>

          <div className="blog__popular__items">
            {blogPopular?.slice(0, 4).map((p, index) => {
              console.log(p, "popular blog");
              return (
                <div className="blog__popular__items__row" key={index}>
                  <div>
                    <Link
                      to={`/blog/${p._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={
                          // PF +
                          p.thumbnail
                        }
                        alt=""
                        id="blogimg"
                        crossOrigin="anonymous"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link
                      to={`/blog/${p._id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <p className="name">{p.headline}</p>

                      <p className="date">
                        <CalendarMonthIcon /> {formatDate(p.date)}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Heading text={"other related blogs"} />
      <div className="featured__container">
        {blogRelated?.slice(0, 3).map((card, index) => {
          let even;
          console.log(blogRelated);

          if ((index + 1) % 2 === 0) {
            even = index;
          }

          return (
            <div className="featured__container__card" key={index}>
              <div className="card__img">
                <Link
                  to={`/blog/${card._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={PF + card.thumbnail}
                    alt=""
                    id="blogimg"
                    crossOrigin="anonymous"
                  />
                </Link>
                <p>{card.tag}</p>
              </div>

              <div className="card__date">
                <p>{formatDate(card.date)}</p>

                <p className="share">
                  <ShareIcon />
                </p>
              </div>

              {even ? (
                <div className="card__title" id="red">
                  {card.headline}
                </div>
              ) : (
                <div className="card__title">{card.headline}</div>
              )}
              <div className="card__excerpt">{card.excerpt}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
