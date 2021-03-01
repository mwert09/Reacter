import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";

export const homePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reacter
        </Header>
        <Header as="h2" inverted content="Welcome to Reacter"></Header>
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to the Activities!
        </Button>
      </Container>
    </Segment>
  );
};
