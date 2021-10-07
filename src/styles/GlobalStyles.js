import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;     
    }
    body {
        background-color:#0c0c0c;
        color:#fff;
        overflow-x:hidden;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration:none;
    }
`;