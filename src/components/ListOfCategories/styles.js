import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const UnOrderedList = styled.ul`
    list-style: none;
    display: flex;
    overflow: scroll;
    width: 100%;
    padding: 10px;
    ${props => props.fixed && css`
        ${fadeIn({ time: '.5s', type: 'ease' })}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        left: 0;
        margin: 0 auto;
        max-width: 500px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
        &::-webkit-scrollbar {
        display: none;
    `}   
`

export const ListItem = styled.li`
    padding: 0 8px;
`
