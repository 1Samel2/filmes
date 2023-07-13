import styled from "styled-components";

export const Background = styled.div`
    

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.5);
        background-color: #000000;
        opacity: 0.5;
    }
`