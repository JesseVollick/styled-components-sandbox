import React from 'react';
import styled from 'styled-components'

const BoxContainer = styled.div`
    display: flex;
`

const Box = styled.div`
        height: 50px;
        width: 50px;
        margin: 0px;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
`

const FiveBoxes = (props) => {
    return (
        <div>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
        </div>


    );
};



export default FiveBoxes;
