import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const PhotoCardWrapper = styled.article`
    min-height: 200px;
    width: 100%;
`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;

`

export const Img = styled.img`
    ${fadeIn({ time: '2s', type: 'ease' })}
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`
