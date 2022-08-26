import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.svg";
import { ReactComponent as WebIcon } from "../../images/world-wide-web-svgrepo-com.svg";
import { ReactComponent as MailIcon } from "../../images/mail-svgrepo-com.svg";
import { ReactComponent as Phoneicon } from "../../images/phone-svgrepo-com.svg";


const Container = tw(ContainerBase)`bg-gray-600 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Treact</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/components/hero/BackgroundAsImage.js">Home</Link>
            <Link href="#">About</Link>
            <Link href="/components/forms/TwoColContactUsWithIllustration.js">Contact Us</Link>
            <Link href="/components/features/DashedBorderSixFeatures">Services</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://stunning-fairy-f9945c.netlify.app/" target="_blank">
              <WebIcon />
            </SocialLink>
            <SocialLink href="mailto:info@multixcelservices.com" target="_blank">
              <MailIcon />
            </SocialLink>
            <SocialLink href="tel:+91-9305938644" target="_blank">
              <Phoneicon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, MultiXcel. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
