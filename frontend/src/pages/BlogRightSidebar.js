import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogcontentTwo from "../containers/blog/BlogcontentTwo";

const BlogRightSidebar = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Latest News</title>
        <meta
          name="description"
          content="Blog page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LATEST NEWS" />
        {/* blog content */}
        <BlogcontentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogRightSidebar;
