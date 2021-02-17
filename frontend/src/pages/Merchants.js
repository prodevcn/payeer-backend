import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Merchant from "../containers/merchants/Merchant";

const Merchants = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Merchants</title>
        <meta
          name="description"
          content="Merchants page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="MERCHANTS" />
        {/* merchant content */}
        <Merchant />
      </LayoutTwo>
    </Fragment>
  );
};

export default Merchants;
