import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import HeadLine from "../components/HeadLine"

import styled from 'styled-components';

import Chevron  from '../images/chevron-bottom.svg'

const Text = styled.h1`
  font-size: 2.5em;
  color: palevioletred;
  text-align:center;
`;

const Icon2 = styled(Chevron)`
& path {
  fill: red;
}
`
const HeadLineStyled = styled(HeadLine)`
  color:red !important;
`
const IndexPage = () => (
    <>
      <HeadLineStyled/>
      <Text>here's my test icon: 
        <Icon2 />
      </Text>
    </>

)

export default IndexPage