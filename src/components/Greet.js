import React from "react";
import styled from "styled-components";

export default function Greet(props) {
  const GreetingContainer = styled.article`
    text-align: center;
  `;

  const Greeting = styled.p`
    color: white;
    font-size: 4rem;
    text-shadow: 0 0 5px black;
  `;

  const LogOutButton = styled.button`
    padding: 1rem 2rem;
    border: 3px solid white;
    border-radius: 10px;
    background: transparent;
    font-size: 2rem;
    color: white;
  `;

  return (
    <GreetingContainer>
      <Greeting>Hello {props.name}! Hope you are doing well!</Greeting>
      <LogOutButton onClick={props.logOut}>Log Me Out</LogOutButton>
    </GreetingContainer>
  );
}
