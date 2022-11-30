import React from "react";

import StyledContainer from "../../StyledContainer";
import {
  facebookIcon,
  linkedinIcon,
  youtubeIcon,
  spotifyIcon,
  twitterIcon,
  windowsIcon,
  playStoreIcon,
  appleStoreIcon,
  heartIcon,
} from "../../../assets";
import {
  StyledFooter,
  FooterTopSection,
  FooterLinksContainer,
  FlexContainer,
  FooterMiddleSection,
  FooterBottomSection,
} from "./styles";
import logo from "../../../assets/fixtools-logos/fixtools-logos_black.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterTopSection>
        <StyledContainer>
          <FlexContainer>
            <div className="logo-container">
              <div className="logo">
                <img src={logo} alt={`${logo}`} />
              </div>
              <h2 className="logo-line">We make Tools easy.</h2>
            </div>
            <FooterLinksContainer>
              <h2>Solutions</h2>
              <h3>Business</h3>
              <h3>Education</h3>
            </FooterLinksContainer>
            <FooterLinksContainer>
              <h2>Company</h2>
              <h3>About</h3>
              <h3>Help</h3>
              <h3>Blog</h3>
            </FooterLinksContainer>
            <FooterLinksContainer>
              <h2>Product</h2>
              <h3>Pricing</h3>
              <h3>Teams</h3>
              <h3>Embed PDF</h3>
              <h3>Developers</h3>
            </FooterLinksContainer>
          </FlexContainer>
        </StyledContainer>
      </FooterTopSection>
      <FooterMiddleSection>
        <StyledContainer>
          <FlexContainer>
            <div className="social-media-icons-container">
              <img src={linkedinIcon} alt="" />
              <img src={facebookIcon} alt="" />
              <img src={youtubeIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={spotifyIcon} alt="" />
            </div>
            <div className="platform-container">
              <FlexContainer>
                <div className="platform">
                  {" "}
                  <img src={windowsIcon} alt="" />
                </div>
                <div className="platform">
                  {" "}
                  <img src={playStoreIcon} alt="" />
                </div>
                <div className="platform">
                  {" "}
                  <img src={appleStoreIcon} alt="" />
                </div>
              </FlexContainer>
            </div>
          </FlexContainer>
        </StyledContainer>
      </FooterMiddleSection>
      <FooterBottomSection>
        <StyledContainer>
          <div className="copy-rights-section">
            <p>
              © 2022 Smallpdf AG — Made with{" "}
              <span className="heart-icon">
                <img src={heartIcon} alt="" />
              </span>{" "}
              for the people of the internet.
            </p>
          </div>
        </StyledContainer>
      </FooterBottomSection>
    </StyledFooter>
  );
}
