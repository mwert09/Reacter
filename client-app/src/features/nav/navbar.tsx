import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

export const NavBar = () => {
  const { activityStore } = useStore();

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
            <Button
              onClick={() => activityStore.openForm()}
              positive
              content="Create Activity"
            />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
