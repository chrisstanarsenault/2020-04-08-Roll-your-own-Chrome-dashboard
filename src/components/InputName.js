import React from "react";
import styled from "styled-components";

export default function InputName(props) {
  const InputTitle = styled.article`
    font-size: 4rem;
    color: white;
    text-shadow: 0 0 5px black;
  `;

  const FormContainer = styled.form`
    text-align: center;
    margin-top: 2rem;
  `;

  const InputName = styled.input`
    font-size: 2rem;
    color: white;
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    text-align: center;
  `;
  return (
    <article>
      <InputTitle>What is your name?</InputTitle>
      <FormContainer onSubmit={props.handleSubmit}>
        <InputName type="text" name="name" />
      </FormContainer>
    </article>
  );
}
