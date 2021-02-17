import * as React from "react";
import styled from 'styled-components'


const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 10rem;
    background: #B6B4C2;
    color: #F3D8CF;
    border: 2px solid #B6B4C2;
    text-align: center
`

const Header:React.FC = () => {
    return(
        <>
        <Button>Season 1</Button>
        <Button>Season 2</Button>
        <Button>Season 3</Button>
        <Button>Season 4</Button>
        <Button>Season 5</Button>
        <Button>Final Season </Button>
        </>
    )

}

export default Header;