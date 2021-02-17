import React from "react";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const BlogSidebar = () => {
  return (
    <div className="dg__sidebar">
      {/* Start Single */}
      <div className="single__widget search">
        <input type="text" placeholder="Search  ..." />
        <button>
          <MdSearch />
        </button>
      </div>
      {/* End Single */}
      {/* Start Single */}
      <div className="single__widget sid-catrgory">
        <h4>CATEGORIES</h4>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Online Currency</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Money Transfer</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Bitcoin Rate</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>World Trade</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Market Analytics</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Market Analytics</Link>
          </li>
        </ul>
      </div>
      {/* End Single */}
      {/* Start Single */}
      <div className="single__widget recent__post">
        <h4>RECENT POST</h4>
        <ul>
          <li>
            <div className="thumb">
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                <img
                  src={process.env.PUBLIC_URL + "/images/blog/list/1.jpg"}
                  alt="blog img"
                />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  Diffrent title gose here. This is demo title.
                </Link>
              </h4>
              <span>February 15, 2020</span>
            </div>
          </li>
          <li>
            <div className="thumb">
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                <img
                  src={process.env.PUBLIC_URL + "/images/blog/list/2.jpg"}
                  alt="blog img"
                />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  Diffrent title gose here. This is demo title.
                </Link>
              </h4>
              <span>February 16, 2020</span>
            </div>
          </li>
          <li>
            <div className="thumb">
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                <img src="images/blog/list/3.jpg" alt="blog img" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  Diffrent title gose here. This is demo title.
                </Link>
              </h4>
              <span>February 17, 2020</span>
            </div>
          </li>
          <li>
            <div className="thumb">
              <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                <img src="images/blog/list/4.jpg" alt="blog img" />
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  Diffrent title gose here. This is demo title.
                </Link>
              </h4>
              <span>February 18, 2020</span>
            </div>
          </li>
        </ul>
      </div>
      {/* End Single */}
      {/* Start Single */}
      <div className="single__widget banner">
        <div className="thumb">
          <img
            src={process.env.PUBLIC_URL + "/images/blog/list/5.jpg"}
            alt="blog images"
          />
        </div>
      </div>
      {/* End Single */}
      {/* Start Single */}
      <div className="single__widget tag">
        <h4>tag</h4>
        <ul className="d-flex flex-wrap">
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Design</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Print</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Adobe</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Creative</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Support</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Print</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Creative</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Support</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Print</Link>
          </li>
        </ul>
      </div>
      {/* End Single */}
    </div>
  );
};

export default BlogSidebar;
