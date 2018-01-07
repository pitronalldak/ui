import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import Typist from 'react-typist';

const GlobalWrapper = styled.div`
  height: 100vh;
`
const OuterContainer = styled.div`
  height: ${({ isOpen }) => isOpen && '100%'};
  perspective: ${({ isOpen }) => isOpen && '1500px'};
  overflow: ${({ isOpen }) => isOpen && 'hidden'};
`

const PageWrap = styled.div`
  background: #b4bad2;
  height: 100vh;
  transform: ${({ isOpen }) => isOpen && 'translate3d(-100px, 0px, -600px) rotateY(20deg)'};
  transform-style: ${({ isOpen }) => isOpen && 'preserve-3d'};
  transition: ${({ isOpen }) => isOpen && 'all 0.5s'};
  overflow: ${({ isOpen }) => isOpen && 'hidden'};
`

const Page = styled.main`
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  padding: 20% 0 0 20%;
`
const Img = styled.img`
  position: absolute;
  left: 60%;
  height: 75%;
  bottom: 0;
`

const MenuItem = styled.a`
  color: #b4bad2;
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    background: #b4bad2;
    color: #373a47;
  }
`


class IndexPage extends React.Component {
  state = { isOpen: false }

  handleMenuOpen = state => {
    this.setState(state)
  }


  render() {
    const { isOpen } = this.state
    return(
      <GlobalWrapper>
        <OuterContainer isOpen={isOpen} id="outer-container">
          <Menu
            id="scaleRotate"
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            onStateChange={this.handleMenuOpen}        
            right
          >
            <MenuItem id="home" className="menu-item" href="/">About</MenuItem>
            <MenuItem id="about" className="menu-item" href="/about">Techologies</MenuItem>
            <MenuItem id="contact" className="menu-item" href="/contact">Portfolio</MenuItem> 
            <MenuItem id="contact" className="menu-item" href="/contact">Contributions</MenuItem> 
            <MenuItem id="contact" className="menu-item" href="/contact">Contact us</MenuItem> 
          </Menu>
          <PageWrap isOpen={isOpen} id="page-wrap"> 
            <Typist>
              <Title>Hire an expert Front-End Team</Title>
            </Typist>
            <Img src="../static/img/bart-main.png" />
          </PageWrap>
        </OuterContainer>
      </GlobalWrapper>
    )
  }
} 

export default IndexPage
