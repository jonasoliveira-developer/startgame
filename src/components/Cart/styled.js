import styled from 'styled-components';


export const CartContainer = styled.div`
    z-index:1;
    cursor: pointer;
    position:absolute;
    top:0px;
    right:${(props) => props.close ? '0' : '-730px'};
    background-color:#000;
    min-height:100vh;
    transition:all ease 1s;
    padding-top:20px;

    @media (max-width: 650px) {
            display:flex;
            flex-direction:column;
            align-content:center;
            justify-content:center;

        }

   
    

    button {
        background-color:green;
        max-width:300px;
        font-size:20px;
        font-weight:bold;
        color:#fff;
        padding:10px 35px;
        border:none;
        border-radius:5px;
        margin:15px 0 0 10px;

        @media (max-width: 650px) {
            margin-top:100px;
            width:100%;
            

        }
    }


   
    tr {
        
        width:700px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #FF8139;
        padding:0 20px;

        @media (max-width: 650px) {
        flex-direction:column;
        width:500px;
        align-content:center;
    }


        td {
            display:flex;
            justify-content:center;
            align-items:center;
            margin:10px 0;

            @media (max-width: 650px) {
             flex:1;
             justify-content:center;
            }
            
            img {
                width:100px;
            }
            svg:hover {
                color:#FF8139;
            }
            
        }
    }  

    h3 {
        font-size:25px;
        text-align:center; 
        padding:15px;  
        color:#FF8139;
    }
`;

export const  ContainerImage = styled.div`
    z-index:2;
    margin-bottom:20px;
    cursor: pointer;


    img {
        width:50px;
        margin-right:10px;

    }
    span {
        font-size:20px;
        margin-bottom:20px;
        color:#FF8139;
    }
`;  

export const TableHeader = styled.thead`
        width:700px;
        height:60px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        color:#FF8139;
        font-size:23px;
        font-weight:bold;

        @media (max-width: 650px) {
            width:480px;

        }
        
`;

export const TableFooter = styled.tr`
        width:700px;
        height:60px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        border-bottom:1px solid #FF8139;
        color:#fff;
        font-size:23px;
        font-weight:bold;
`;