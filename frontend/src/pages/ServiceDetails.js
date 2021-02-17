import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContentTwo from "../components/service-contents/ServiceContentTwo";
import ServiceContentThree from "../components/service-contents/ServiceContentThree";
import ServiceFeature from "../containers/service-contents/ServiceFeature";

const ServiceDetails = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Service Details</title>
        <meta
          name="description"
          content="Service details page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES DETAILS" />
        {/* service content */}
        <ServiceContentTwo />
        {/* service features */}
        <ServiceFeature />
        {/* service content */}
        <ServiceContentThree />
      </LayoutTwo>
    </Fragment>
  );
};

export default ServiceDetails;
