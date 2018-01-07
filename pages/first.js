import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const IndexPage = () => (
  <div id="outer-container">
    <Menu outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" }>
      <main id="page-wrap">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </main>
      
    </Menu>
  </div>
) 

export default IndexPage
