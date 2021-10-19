import { Container, Menu, Button } from "semantic-ui-react";

interface Props {
  setShowEventForm: (formState: boolean) => void;
}

export default function Navbar({ setShowEventForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/images/sun-small.png" alt="sun logo" />
          <Menu.Item name="events" />
          <Menu.Item>
            <Button positive inverted content="Create event" onClick={() => setShowEventForm(true)} />
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
