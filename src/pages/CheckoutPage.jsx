import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Wrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background-color: #333;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirect back to the home page
  };

  return (
    <Container>
      <Wrapper>
        <Title>Thank You for Your Purchase!</Title>
        <Message>Your order is being processed. You will receive an email confirmation shortly.</Message>
        <Button onClick={handleBackToHome}>Back to Home</Button>
      </Wrapper>
    </Container>
  );
};

export default CheckoutPage;
