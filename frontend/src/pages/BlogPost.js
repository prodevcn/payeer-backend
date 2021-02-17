import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogPostContent from "../containers/blog/BlogPostContent";

const BlogPost = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | News Details</title>
        <meta
          name="description"
          content="News details page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="NEWS DETAILS" />
        {/* blog post content */}
        <BlogPostContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogPost;
