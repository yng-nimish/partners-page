import React from "react";

import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../assets/logo2.svg";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCard } from "@coreui/react";
import { CListGroup } from "@coreui/react";
import { CListGroupItem } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { CCardTitle } from "@coreui/react";
import { CCardSubtitle } from "@coreui/react";
import { CCardText } from "@coreui/react";

import { CRow } from "@coreui/react";
import { CCol } from "@coreui/react";

const Partner = () => {
  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h7 className="primary-heading-welcome"> PARTNERS </h7>
            <h1 className="primary-heading">
              Become a Partner with Your Number Guaranteed Inc.
            </h1>
            <p className="primary-text">
              Join us in utilizing our Intellectual Property(IP) for your
              business, organization, or club. We aim to make it accessible and
              affordable for everyone to share in our creations. Our partnership
              format is straightforward and cost-effective.
              <br /> <br /> <br />
            </p>
            <div className="button">
              <button className="about-button-2">
                Link to the Store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FiArrowRight />
              </button>
            </div>
            <br /> <br /> <br />
            <br /> <br /> <br />
          </div>
          <div className="home-bannerImage-container">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <div className="partner-section-2">
        <div className="partner-card">
          <CCard layout="fill">
            <CCardBody>
              <CCardSubtitle className="mb-2 ">
                UNLOCK BOUNDLESS POTENTIAL WITH YNG PARTNERSHIPS!!
              </CCardSubtitle>

              <CCardTitle>Why Partner with Us?</CCardTitle>

              <CCardText>
                <CListGroup flush>
                  <CListGroupItem>
                    01 🚀 Accelerate Your Success: Harness the power of our
                    innovative solutions to propel your ventures to new heights.
                  </CListGroupItem>
                  <CListGroupItem>
                    02 💡 Unleash Creativity: Tap into a wealth of ideas and
                    resources to ignite inspiration and drive innovation within
                    your domain.
                  </CListGroupItem>
                  <CListGroupItem>
                    03 💰 Cost-Effective Collaboration: Experience unparalleled
                    value with our straightforward and budget-friendly
                    partnership model.
                  </CListGroupItem>
                </CListGroup>
              </CCardText>
            </CCardBody>
          </CCard>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="partner-3">
        <div className="partner-Container">
          <p className="secondary-subheading">
            {" "}
            JOIN FORCES WITH YOUR NUMBER GUARANTEED INC.
          </p>
          <h1 className="primary-heading-2"> Experience the Benefits </h1>
        </div>
        <div className="partner-card">
          <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CCardTitle>Propel Your Products</CCardTitle>
                  <CCardText>
                    Enhance your branding by embedding our logo or IP on your
                    merchandise, captivating audiences and boosting brand
                    recognition, all at an affordable price of just $0.99 per
                    unit shipped out, ensuring maximum return on investment.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CCardTitle>Elevate Your Services</CCardTitle>
                  <CCardText>
                    Access our exclusive IP to seamlessly integrate into your
                    service offerings, enhancing efficiency and reliability.
                    Experience streamlined operations at a monthly rate of just
                    $0.99 per user, customized to meet your specific needs.
                    <br />
                    <br />
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CCardTitle>Ignite Engagement</CCardTitle>
                  <CCardText>
                    Ignite excitement with captivating events and competitions
                    powered by our IP, driving audience participation and
                    enthusiasm. Enrich educational experiences with unlimited
                    learning opportunities, available for just $0.99 per student
                    for event usage.
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard>
                <CCardBody>
                  <CCardTitle>Amplify Your Presence</CCardTitle>
                  <CCardText>
                    Boost your credibility by featuring our technical papers in
                    your publications, showcasing your expertise to a wider
                    audience. With extensive exposure, confidently publish for a
                    nominal fee of only $0.99 per publication.
                    <br />
                    <br />
                  </CCardText>
                </CCardBody>
              </CCard>
              <div className="button">
                <br />
                <br />
                <button className="about-button-2">
                  Contact
                  Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <FiArrowRight />
                </button>
              </div>
            </CCol>
          </CRow>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Partner;
