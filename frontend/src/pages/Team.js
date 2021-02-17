import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import TeamContent from "../containers/teams/TeamContent";

const Team = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ROYAL TRANSFERT | Team</title>
        <meta
          name="description"
          content="Team page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="OUR TEAM" />
        {/* team content */}
        <TeamContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Team;
