import styled from 'styled-components';

export const PaymentContainer = styled.div`
    max-width:600px;
    margin:15px auto;
    border:1px solid #fff;
    border-radius:7px;
    padding:20px;

    div {
        text-align:center;

        img {
            width:300px;
            margin-top:15px;
            border-radius:5px;
        }

        div {
            width:100%;
            margin-top:10px;

            button {
                border:none;
                outline:none;
                width:60px;
                margin:5px;
                border-radius:5px;
                font-weight:bold;
                text-transform:uppercase;
                color:#000;
                font-size:25px;
                

                
            }
            span {
                button {
                    background-color:#afc216;
                    color:#000;
                    width:80%;
                    padding:10px;

                    &:hover {
                        background-color:#9aad00;
                    }
                }
            }
            strong {
                font-size:30px;
                color:#FF8139;
                margin:0 5px;
            }
        }
    }
    

`;

export const Score = styled.div`
    display:flex;
    font-size:18px;
    font-weight:bold;

    span {
        margin-left:5px;
        font-size:25px;
    }
    
`;