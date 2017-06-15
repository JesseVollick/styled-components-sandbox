import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import DemoHeader from './DemoHeader';

const Outer = styled.div `
    text-align: center;
`



const Button = styled.button `
        /* Adapt the colours based on primary prop */
        background: ${props => props.primary ? 'palevioletred' : 'white'};
        color: ${props => props.primary ? 'white' : 'palevioletred'};
        
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
`

const Para = styled.p`
    font-size: large;
    color: ${props => props.light = 'white'}
`

const Content = styled.div`
      background-color: steelblue;
      padding: 20px;
      color: white;
`



class App extends Component {
  render() {
    return (
      <Outer>
          <ThemeProvider theme={{
              tom: 'tomato',
              papaya: 'papayawhip',
              bearsEat:'salmon'
          }}>
            <DemoHeader />
          </ThemeProvider>
          <DemoHeader />
              <Content>
                  <Para light>Hello Style-Components</Para>
                  <Button>Normal</Button>
                  <Button primary>Primary</Button>
              </Content>

      </Outer>
    );
  }
}


export default App;

