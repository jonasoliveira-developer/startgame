import React, { useContext, useEffect, useState } from 'react';
import { CartContainer, ContainerImage , TableFooter, TableHeader} from './styled';

import {CartContex} from '../../Context/CartContex';

import {FaTrashAlt} from 'react-icons/fa';


export const Cart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const {count, handleDeleteGame} = useContext(CartContex)


    const [close, setClose] = useState(false);
    const [subTotal ,setSubTotal] = useState(0)
    const [total,setTotal] = useState()
    const [frete, setFrete] = useState(10)
    

    const handleToggleCart = () => {
        setClose(!close)
            
    }
    useEffect(() => {
        setFrete((count*10)) 
        if(frete > 250)  {
            setFrete(0)
        }
    },[count,frete])

    

   
    useEffect(() => {
        const subTotalPrice = () => {
            let value = cart?.map(element => element.price * element.qtd)
            let subTotal = value?.reduce((accumuletor,value) => accumuletor + value,0 )

            setSubTotal(subTotal)

            setTotal((subTotal + frete))

                
        }
        subTotalPrice()
    },[frete,cart])
    


    return (
        <>
            <ContainerImage onClick={handleToggleCart} >
                <span>{count}</span>
                <img src="/assets/cart-icon.svg" alt="Cart" />
            </ContainerImage>

            <CartContainer close={close}> 

                    <h3>Seus Itens</h3>
                <table>
                <TableHeader>
                  <td>Game</td>
                  <td>Quantidade</td>
                  <td>Nome</td>
                  <td>Valor</td>
                  <td>Excluir</td>
                </TableHeader>
                    {cart &&
                        cart?.map((game, index) => (
                            <tr key={index}>
                                <td><img src={`/assets/${game.image}`} alt={game.name} /></td>
                                <td>{game.qtd}</td>
                                <td>{game.name}</td>
                                <td>{(game.price * game.qtd).toFixed(2)}</td>
                                <td onClick={() =>handleDeleteGame(game.id)}><FaTrashAlt /></td>
                            </tr>
                           
                        ))
                    }
                     <TableFooter>
                       <td>SubTotal: {subTotal?.toFixed(2) }</td>
                       <td>Frete: {frete?.toFixed(2)}</td>  
                       <td>Total: {total?.toFixed(2)}</td>
                     
                     </TableFooter>
                </table>
                <button>Finalizar Compra</button>
            </CartContainer>
        </>
    )
}