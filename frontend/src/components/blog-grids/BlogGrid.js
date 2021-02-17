import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/section-titles/SectionTitle";

const BlogGridOne = () => {
  return (
    <div className="dg__blog__are bg--white pb--140">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* section title */}
            <SectionTitle
              title="Our Latest News"
              text="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour."
            />
          </div>
        </div>
        <div className="row">
          {/* Start Single Blog */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <article className="blog">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/lg-img/1.jpg"}
                    alt="blog images"
                  />
                </Link>
              </div>
              <div className="content">
                <span>Progress</span>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Our Currency is one of the best currency in the world, And
                    its secure too.
                  </Link>
                </h2>
                <p>February 13, 2020</p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            {/* Start Single Blog */}
            <article className="blog blog__small">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/1.jpg"}
                    alt="blog images"
                  />
                </Link>
              </div>
              <div className="content">
                <span>Progress</span>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Our Currency is one of the best currency in the world.
                  </Link>
                </h2>
                <p>February 13, 2020</p>
              </div>
            </article>
            {/* End Single Blog */}
            {/* Start Single Blog */}
            <article className="blog blog__small">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/2.jpg"}
                    alt="blog images"
                  />
                </Link>
              </div>
              <div className="content">
                <span>Progress</span>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Our Currency is one of the best currency in the world.
                  </Link>
                </h2>
                <p>February 13, 2020</p>
              </div>
            </article>
            {/* End Single Blog */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridOne;
