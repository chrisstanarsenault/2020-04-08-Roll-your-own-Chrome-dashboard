import React, { Component } from "react";
import styled from "styled-components";

import InputName from "./InputName";
import Greet from "./Greet";

const wallpaperURL = "https://source.unsplash.com/random/3840x2160";

const WallpaperContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${wallpaperURL});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`;

const InputGreetContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000052;
  height: 800px;
  width: 800px;
`;

export default class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isNameFormSubmitted: false,
    };
  }

  handleNameSubmit = (e) => {
    e.preventDefault();
    e.target.name.value
      ? localStorage.setItem("user", e.target.name.value)
      : localStorage.setItem("user", "Anon");
    localStorage.setItem("isNameFormSubmitted", true);
    this.setState({
      name: e.target.name.value,
      isNameFormSubmitted: true,
    });
  };

  handleLogOut = () => {
    localStorage.clear();
    this.setState({
      name: "anon",
      isNameFormSubmitted: false,
    });
  };

  render() {
    return (
      <WallpaperContainer>
        <InputGreetContainer>
          {!localStorage.getItem("isNameFormSubmitted") ? (
            <InputName handleSubmit={this.handleNameSubmit} />
          ) : (
            <Greet
              name={localStorage.getItem("user")}
              logOut={this.handleLogOut}
            />
          )}
        </InputGreetContainer>
      </WallpaperContainer>
    );
  }
}
