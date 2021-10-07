import styled from 'styled-components';

export const CardContainer = styled.ul`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:10px;
    margin-top:40px;
    padding:20px;

    @media (max-width: 820px) {
        grid-template-columns:1fr 1fr;
        justify-items:center;
    }

    @media (max-width: 600px) {
        grid-template-columns:1fr;
        
    }
`;

export const ButtonOrder = styled.button`
    width:150px;
    height:30px;
    margin:20px 10px 0 10px;
    border-radius:5px;
    border:none;
    font-size:16px;
    font-weight:bold;
    background-color:#FF8139;
    color:#fff;

    @media (max-width: 820px) {
      width:30%;
      text-align:center;
      margin-left:auto;
       
    }

`;

export const Card = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    list-style:none;
    width:250px;
    max-height:400px;
    padding:10px;
    border:1px solid #FF8139;
    border-radius:7px;
    cursor: pointer;
    transition:all ease .2s; 

    &:hover{
        border:1px solid #fff;
    }
    strong {
        align-self:flex-start;
        color:yellow;
        font-size:20px;
    }

  img {
      width:100%;
      border-radius:5px;
  }
  h2 {
    text-align:center;
    margin-bottom:7px;
  }
  span {
      font-size:20px;
      margin:5px;
  }

  button {
      width:100%;
      outline:none;
      border:none;
      padding:5px;
      border-radius:5px;
      font-size:18px;
      font-weight:bold;
      text-transform:uppercase;
      color:#fff;
      background-color:#0d8508;

      &:hover {
          background-color:#006400;
      }
  }
`;