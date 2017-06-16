import React, {Component} from 'react';
import FiveBoxes from  './FiveBoxes'
import PropTypes from 'prop-types';
import styled from 'styled-components'

//flex direction = row, row-reverse, column, column-reverse
//justify-content = flex-start, flex-end, center, space-between, space-around

const red = '#FFA179';
const yellow = '#FFE670';
const green = '#82A56E';
const blue = '#7CBBFF';
const purple = '#5A5068';
const white = '#FFFFF7';

const Box = styled.div`
        width: 100px;
        margin: 0px;
        padding: 0.25em 1em;
        border: 2px solid ${blue} ;
        border-radius: 3px;
`
const Box2 = styled.div`
        width: 100px;
        height:100px;
        margin: 0px;
        padding: 0.25em 1em;
        border: 2px solid ${blue} ;
        border-radius: 3px;
`

const Outer1 = styled.div`
      display:flex;
      flex-direction: row;
      border: 4px solid #FFFFF7;
      background: ${purple};
      height:100px;
`

const Outer2 = styled.div`
      display:flex;
      flex-direction: row;
      justify-content: center;
      border: 4px solid ${white};
      background: ${red};
      height:100px;
`

const Between = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: 4px solid ${white};
      background: ${green};
      height:100px;
`

const Around = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      border: 4px solid ${white};
      background: ${yellow};
      height:100px;
`


const Outer3 =styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:stretch;
    height: 500px;
    background: ${purple};
`
const SetOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border:1px solid salmon;
`
const SetTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;  
    border:1px solid salmon;

`
const SetThree = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    border:1px solid salmon;
`
const SetFour = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    // align-items: center;
    border:1px solid salmon;
`




class FlexBoxSandBox extends Component {
    render() {
        return (
            <div>
                <Outer1>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                </Outer1>
                <Outer2>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                </Outer2>
                <Between>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                </Between>
                <Around>
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                    <Box>4</Box>
                </Around>
                <Outer3>
                    <SetOne>
                        <Box2>1</Box2>
                        <Box2>2</Box2>
                        <Box2>3</Box2>
                    </SetOne>
                    <SetTwo>
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                    </SetTwo>
                    <SetThree>
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                    </SetThree>
                    <SetFour>
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                    </SetFour>

                </Outer3>
            </div>


        );
    }
}

FlexBoxSandBox.propTypes = {};
FlexBoxSandBox.defaultProps = {};

export default FlexBoxSandBox;
