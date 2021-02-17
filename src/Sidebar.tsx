import styled from 'styled-components'
import * as React from "react";


const Ul = styled.ul`
    list-style: none; 
    text-align: left; 
`

const Aa = styled.a`
    text-decoration: none;
    color: #AAC9CE;
    font-weight: bold;
    font-size: large;
`
const Li = styled.li`
    margin: 1rem;
    @media all and (max-width: 768px) {
        display: inline-grid;
        margin: 0.5rem 2rem 0.5rem -1rem ;
    } 
`

const Sidebar:React.FC = () => {
    return(
        <>
            <Ul>
                <Li><Aa href="#">Home</Aa></Li>
                <Li><Aa href="#">About Us</Aa></Li>
                <Li><Aa href="#">Summary</Aa></Li>
                <Li><Aa href="#">Cast</Aa></Li>
                <Li><Aa href="#">Director</Aa></Li>
                <Li><Aa href="#">Music</Aa></Li>
                <Li><Aa href="#">Contact</Aa></Li>
            </Ul>
        </>

    )
}

export default Sidebar