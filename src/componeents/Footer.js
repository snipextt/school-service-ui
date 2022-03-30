import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "../Static/images/white-min(1).png";
import { ReactComponent as LinkedinIcon } from "../Static/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../Static/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../Static/youtube-icon.svg";

const ContainerBase = tw.div`relative`;

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-32`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="http://certificate.placementgurukul.com">
              Certificates
            </Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/placement-gurukul/">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCKTHNZof6gh3c9hOxlV9cXw">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, School. All Rights Reserved.
            <a href="https://github.com/snipextt/pg-website/blob/master/LICENSE.md/LICENSE.md">
              {" "}
              Check Open Source License.
            </a>
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
