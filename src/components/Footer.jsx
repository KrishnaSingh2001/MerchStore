/*import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";


import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopzone.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Krishna Singh NIT DGP
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> codekrishna11@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;*/





import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>About Us</SectionTitle>
          <p>
            We are a leading e-commerce platform offering a wide range of products from various categories.
            Our mission is to provide the best shopping experience to our customers.
          </p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Customer Service</SectionTitle>
          <ul>
            <li><a href="/support">Support</a></li>
            <li><a href="/shipping">Shipping & Delivery</a></li>
            <li><a href="/order-tracking">Order Tracking</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <li><a href="https://facebook.com" className="facebook">Facebook</a></li>
            <li><a href="https://twitter.com" className="twitter">Twitter</a></li>
            <li><a href="https://instagram.com" className="instagram">Instagram</a></li>
            <li><a href="https://linkedin.com" className="linkedin">LinkedIn</a></li>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <p><i className="fas fa-phone"></i> +1 234 567 890</p>
          <p><i className="fas fa-envelope"></i> support@shoppingwebsite.com</p>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Shopping Website. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 0;
  text-align: left;
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 20px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #f0f0f0;
`;

const SocialIcons = styled.ul`
  display: flex;
  gap: 10px;

  li a {
    color: #bbb;
    font-size: 20px;
    transition: color 0.3s;
  }

  li a:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #444;

  p {
    margin: 0;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  li a {
    color: #bbb;
    text-decoration: none;
    transition: color 0.3s;
  }

  li a:hover {
    color: #fff;
  }
`;
