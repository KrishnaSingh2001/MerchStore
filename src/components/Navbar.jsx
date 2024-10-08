/*
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux.js"; // Import the logout action

const Container = styled.div`
  height: 100px;
  margin: 0;
  padding: 0;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Logo = styled.h1`
      font-size:  50px;
      background: linear-gradient(to right, #D22B2B, black);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

  ${mobile({ fontSize: "24px" })}
`;

//  font-weight: bold;
//align-item: center;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser); // Get the current user from Redux state
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopzone</Logo>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

*/

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux.js";

const Container = styled.div`
  height: 100px;
  margin: 0;
  padding: 0;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 50px;
  background: linear-gradient(to right, #D22B2B, black);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Badge = styled.span`
  background-color: #f50057;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 5px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <i className="fas fa-search" style={{ color: "gray", fontSize: 16 }}></i>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopzone</Logo>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>
              <i className="fas fa-shopping-cart"></i>
              {quantity > 0 && <Badge>{quantity}</Badge>}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
