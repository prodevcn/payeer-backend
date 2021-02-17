import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogGridTwoSingle = ({ data }) => {
  return (
    <div className="col-lg-4 col-sm-6 col-12 col-md-6">
      <article className="blog__2">
        <div className="thumb">
          <Link to={process.env.PUBLIC_URL + data.url}>
            <img src={process.env.PUBLIC_URL + data.image} alt="" />
          </Link>
        </div>
        <div className="content">
          <ul className="meta">
            <li>{data.date}</li>
            <li>Post By: {data.author}</li>
          </ul>
          <h2>
            <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
          </h2>
          <p>{data.excerpt}</p>
        </div>
      </article>
    </div>
  );
};

BlogGridTwoSingle.propTypes = {
  data: PropTypes.object
};

export default BlogGridTwoSingle;
