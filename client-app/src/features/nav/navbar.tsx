import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export const NavBar = ({ openForm }: Props) => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reacter
          </Menu.Item>
          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button onClick={openForm} positive content="Create Activity" />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
