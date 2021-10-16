import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import logo from "../../assets/images/sun-small.png";

export default function Navbar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src={logo} alt="sun logo" />
          <Menu.Item name="events" />
          <Menu.Item>
            <Button positive inverted content="Create event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Register"
              style={{ marginLeft: "0.5rem" }}
            />
          </Menu.Item>
        </Menu.Item>
        <Menu.Item />
      </Container>
    </Menu>
  );
}
