import React from "react";
import SectionTitleSix from "../../components/ui/section-titles/SectionTitleSix";
import walletFeatureData from "../../data/wallet-features/wallet-feature-one.json";
import WalletFeatureSingle from "../../components/wallet-features/WalletFeatureSingle";

const WalletFeature = () => {
  return (
    <div className="dg__feature__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitleSix
              title="What is our wallet features"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          {walletFeatureData &&
            walletFeatureData.map((single, key) => {
              return <WalletFeatureSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default WalletFeature;
