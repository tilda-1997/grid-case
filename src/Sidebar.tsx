import styled from 'styled-components'
import * as React from "react";


const Ul = styled.ul`
    list-style: none; 
    text-align: left;
    @media all and (max-width: 768px) {
        display: inline-grid
    } 
    
`

const Aa = styled.a`
    text-decoration: none;
    color: #AAC9CE;
    font-weight: bold;
    font-size: large
`

const Sidebar:React.FC = () => {
    return(
        <>
        <Ul>
            <li><Aa href="#">Home</Aa></li>
            <li><Aa href="#">About Us</Aa></li>
            <li><Aa href="#">Summary</Aa></li>
            <li><Aa href="#">Cast</Aa></li>
            <li><Aa href="#">Director</Aa></li>
            <li><Aa href="#">Music</Aa></li>
            <li><Aa href="#">Contact</Aa></li>
        </Ul>
        </>

    )
}

export default Sidebar