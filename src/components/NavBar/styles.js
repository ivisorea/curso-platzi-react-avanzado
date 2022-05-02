import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 500px;
    height: 50px;
    width: 100%;
`
export const Link = styled(LinkRouter)`
    display: inline-flex;
    align-items: center;
    color: #888;
    height: 100%;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
`
