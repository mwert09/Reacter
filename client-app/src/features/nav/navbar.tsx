import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={NavLink} to="/" exact header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reacter
          </Menu.Item>
          <Menu.Item as={NavLink} to="/activities" name="Activities" />
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createActivity"
              positive
              content="Create Activity"
            />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
