import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import FooterLogo from "./Logo";

import { useUser } from "../features/authentication/useUser";

const FullBleedFooter = styled.div`
  border-top: 2px solid var(--color-grey-200);

  margin: 6.4rem 0 0;

  ${(props) =>
    props.mlr &&
    css`
      margin-left: -${props.mlr}rem !important;
      margin-right: -${props.mlr}rem !important;
    `}

  padding: 12.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`;

FullBleedFooter.defaultProps = {
  mlr: "7.95",
};

const StyledFooter = styled.footer`
  /* background-color: red; */
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 2fr 1fr 1fr 1fr;
  gap: 2rem;
`;

const LogoCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.div`
  display: block;
  margin-bottom: 3.2rem;
`;

const SocialLinks = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const SocialIcon = styled.p`
  font-size: 3rem;
`;

const Copyright = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: center;
  margin-top: auto;
`;

const ContactContainer = styled.div`
  padding-left: 4rem;
`;

const FooterHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

const Contacts = styled.address`
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.6;
`;

const Address = styled.p`
  margin-bottom: 2.4rem;
`;

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FooterLink = styled.button`
  background: none;
  outline: none;
  border: 0;

  text-decoration: none;
  font-size: 1.6rem;
  color: var(--color-grey-500);
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--color-grey-900);
  }

  &:focus {
    outline: none;
  }
`;

const FooterLinkNormal = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--color-grey-500);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-grey-900);
  }
`;

function Footer({ mlr }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  function handleSignin() {
    if (!isAuthenticated) navigate("/login");
  }

  return (
    <FullBleedFooter mlr={mlr}>
      <StyledFooter>
        <FooterGrid>
          <LogoCol>
            <LogoImg>
              <FooterLogo />
            </LogoImg>

            <SocialLinks>
              <li>
                <FooterLink>
                  <SocialIcon>
                    <AiOutlineInstagram />
                  </SocialIcon>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <SocialIcon>
                    <AiOutlineFacebook />
                  </SocialIcon>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <SocialIcon>
                    <AiOutlineTwitter />
                  </SocialIcon>
                </FooterLink>
              </li>
            </SocialLinks>

            <Copyright>
              Copyright &copy;<span>{new Date().getFullYear()}</span> by
              PathFinder, Inc. <br />
              All rights reserved
            </Copyright>
          </LogoCol>

          <ContactContainer>
            <FooterHeading>Contact us</FooterHeading>
            <Contacts>
              <Address>
                623 Harrison St., 2nd Floor, <br />
                San Francisco, CA 94107
              </Address>
              <p>
                <FooterLinkNormal href="tel:415-201-6370">
                  415-201-6370
                </FooterLinkNormal>
                <br />
                <FooterLinkNormal href="mailto:hello@pathfinder.com">
                  hello@pathfinder.com
                </FooterLinkNormal>
              </p>
            </Contacts>
          </ContactContainer>

          <nav className="nav-col">
            <FooterHeading>Account</FooterHeading>
            <FooterNav>
              <li>
                <FooterLink onClick={() => navigate("/signup")}>
                  Create account
                </FooterLink>
              </li>
              {!isAuthenticated && (
                <li>
                  <FooterLink onClick={handleSignin}>Sign in</FooterLink>
                </li>
              )}
              <li>
                <FooterLink>iOS app</FooterLink>
              </li>
              <li>
                <FooterLink>Android app</FooterLink>
              </li>
            </FooterNav>
          </nav>

          <nav className="nav-col">
            <FooterHeading>About</FooterHeading>
            <FooterNav>
              <li>
                <FooterLink to="/landing-page">About PathFinder</FooterLink>
              </li>
              <li>
                <FooterLink>For Business</FooterLink>
              </li>
              <li>
                <FooterLink>Partners</FooterLink>
              </li>
              <li>
                <FooterLink>Careers</FooterLink>
              </li>
            </FooterNav>
          </nav>

          <nav className="nav-col">
            <FooterHeading>Help</FooterHeading>
            <FooterNav>
              <li>
                <FooterLink>Services</FooterLink>
              </li>
              <li>
                <FooterLink>Help center</FooterLink>
              </li>
              <li>
                <FooterLink>Privacy & terms</FooterLink>
              </li>
            </FooterNav>
          </nav>
        </FooterGrid>
      </StyledFooter>
    </FullBleedFooter>
  );
}

export default Footer;
