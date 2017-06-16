import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';

const Header = styled.div`
      background-color: ${ props => props.theme.papaya || 'black'};
      height: 250px;
      padding: 20px;
      color: white;
        >h2{
            color: ${ props => props.theme.tom || 'white'}
        }
        >h3{
            color:${ props => props.theme.bearsEat || 'white'}
            
        }
`
const Spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const Logo = styled.img`
     animation: ${ Spin } infinite 20s linear;
     ${ props => props.backwards && 'animation-direction: reverse;'}
     height: 80px;
     color: red;
`


 export default ()=> (
     <Header uppercase>
         <Logo backwards src={logo} alt="logo" />
         <Logo src={logo} alt="logo" />
         <h2 dark> Welcome to React </h2>
         <h3 > h3 text </h3>
     </Header>
 )





