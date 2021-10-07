import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width:100%;
    height:100px;
    background-color:#000;
    border-bottom:2px solid #FF8139;

    display:flex;
    justify-content:space-between;
    align-items:center;

    h1 {
        color:#fff;
        font-size:48px;
        margin:0 auto;

        span {
            color:#FF8139;
        }
    }
`;

