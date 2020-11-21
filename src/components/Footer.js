import React from "react"
import styled from "styled-components"
import uuid from "react-uuid"
import { Bounce } from "react-awesome-reveal"
import { Link } from "gatsby"

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0 25px 0;
  display: grid;
  grid-gap: 20px;
`

const Button = styled.button`
  background: linear-gradient(93.96deg, #9b51e0 0%, #3436e7 100%);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 13px 46px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.2);
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);


  a {
    color: white;
  }
  }
  &:hover {
    box-shadow: 0 10px 20px rgba(101, 41, 255, 0.3);
    transform: translateY(-4px);
  }
`

const LinkGroup = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 25px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  a {
    font-size: 18px;
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }

  @media (max-width: 1060px) {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    margin-right: auto;
    margin-left: auto;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    padding: 0px;
  }
`

const Copyright = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(104deg, #050a27 0%, #4a548c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Footer = ({ data }) => (
  <FooterGroup>
    <Button id="contact">
      <Bounce>
        <a href="mailto:e.muhamedgamal@gmail.com">Email</a>
      </Bounce>
    </Button>
    <LinkGroup>
      {data.allContentfulMyWebsiteLink.edges.map(edge => (
        <Link key={uuid()} to={edge.node.url}>
          {edge.node.title}
        </Link>
      ))}
    </LinkGroup>

    <Copyright>
      © {new Date().getFullYear()}, Made by The Man for the People.
    </Copyright>
  </FooterGroup>
)

export default Footer
