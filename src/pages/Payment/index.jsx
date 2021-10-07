import React,{useContext, useState} from 'react';
import { PaymentContainer, Score } from './styled';
import { useParams } from 'react-router-dom';

import { ResponseContext } from '../../Context/response';
import {CartContex} from '../../Context/CartContex';

import {FaStar} from 'react-icons/fa';




const Payment = () => {
    const {games} = useContext(ResponseContext);
    const {handleAddCart, handleFrete,count} = useContext(CartContex);

    const [qtd, setQtd] = useState(1)
    let game = {
          id:0,
          name:'',
          price:0,
          score:0,
          image:'',
          qtd:0

    }
    

    const { id } = useParams();
    
    
          game = games.find(element => element.id === Number(id))

    const handleMinusCount = () => {
        setQtd(qtd - 1)
        if(qtd <= 0) {
            setQtd(0)
        }
    }

    const handleClickAddCart = () => {
        handleAddCart(game,qtd)
    }
    return (
        
        <PaymentContainer>
            <Score><FaStar color="yellow" size={25}/> <span>{game?.score}</span></Score>
            <div>
                <h1>{game?.name}</h1>
                <img src={`/assets/${game?.image}`} alt="oi" />
                <div>
                    <button onClick={handleMinusCount}>-</button>
                       <strong>{qtd}</strong>
                    <button onClick={()=> setQtd(qtd +1)}>+</button>
                    <span>
                        <button onClick={handleClickAddCart}> Adicionar ao carrinho</button>
                    </span>
                </div>
            </div>
        </PaymentContainer>
        
        
    )
}

export default Payment