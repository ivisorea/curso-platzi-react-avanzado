import styled from 'styled-components'

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 75px;
    border: 1px solid linear-gradient(to right, yellow, red);
    
`

export const Image = styled.img`
    border: 3px solid transparent;
    background: 
        linear-gradient(to right, white, white), 
        linear-gradient(to right, orange , violet);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    width: 75px;
    height: 75px;
    padding: 3px;
    
`
