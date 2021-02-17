import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import SoftwareDownloadTwo from "../components/software-downloads/SoftwareDownloadTwo";
import BlogGridTwo from "../containers/blog-grids/BlogGridTwo";
import GetCurrency from "../components/get-currencies/GetCurrency";
import WalletFeature from "../containers/wallet-features/WalletFeature";
import WalletContent from "../components/wallet-contents/WalletContent";

const Wallet = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Wallet</title>
        <meta
          name="description"
          content="Wallet page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="WALLET" />
        {/* wallet content */}
        <WalletContent />
        {/* wallet feature */}
        <WalletFeature />
        {/* get currency */}
        <GetCurrency />
        {/* software download */}
        <SoftwareDownloadTwo />
        {/* blog grid */}
        <BlogGridTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default Wallet;
