import React, { createContext, useState } from 'react';


export const CartContex = createContext({});

export const CartProvider = ({ children }) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    const [count, setCount] = useState(cart.length)


    const handleAddCart = (game, qtd) => {
        const noAdd = cart.find(element => element.id === game.id)
        if (noAdd) {
            alert('Este Game já exite no carrinho ')

        } else {
            game.qtd = qtd
            cart.push(game)
            localStorage.setItem('cart', JSON.stringify(cart))
            setCount(cart.length)

        }


    }

    const handleDeleteGame = (id) => {

        cart = cart.filter((element) => {
            return element.id !== id
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        setCount(cart.length)
    }


    return (
        <CartContex.Provider value={{ handleAddCart, count, handleDeleteGame }}>
            {children}
        </CartContex.Provider>
    )

}

