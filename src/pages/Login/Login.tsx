import React from "react"
import { Button, Container, Icon, Text } from "widgets"
import { routes } from "Routes"
import { history } from "helpers"

const Login = () => (
  <Container column>
    <Icon name="logo" size="xl" color="tertiary" />
    <Text size="lg">Learn a new language while reading</Text>
    <Button content="Google login" onClick={() => history.push(routes.browse)} />
  </Container>
)

export { Login }
