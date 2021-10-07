import React,{useContext, useEffect, useState} from 'react';
import { CardContainer, Card , ButtonOrder} from './styled'
import { useHistory } from 'react-router-dom'


import {ResponseContext} from '../../Context/response';

export const CardList = () => {
    const {games,getGames} = useContext(ResponseContext)
    const [order,setOrder] = useState(0)
    let orderGames = games

    if(order === 1) {
        orderGames = games.slice().sort((l , r) => r.score - l.score )
    }
    else if(order === 2) {
        orderGames = games.slice().sort((l , r) => r.price - l.price )
    }
    else if(order === 3) {
        orderGames = games.slice().sort((l , r) => {
            if(l.name < r.name) {
                return -1
            }else{
                return true
            }
        })
    }

    useEffect(() => {
        getGames()
    },[getGames])

    const history = useHistory();

    return (
        <>
        <h2>Ordene por :</h2>
        <ButtonOrder onClick={() => setOrder(1)}>Score</ButtonOrder>
        <ButtonOrder onClick={() => setOrder(2)}>Preço</ButtonOrder>
        <ButtonOrder onClick={() => setOrder(3)}>Ordem afalbética</ButtonOrder>
        <CardContainer>
            
        {games &&
               orderGames?.map((game) => (
                    <Card key={game?.id}>
                        <strong>score {game.score}</strong>
                        <h2>{game?.name}</h2>
                        <img src={`/assets/${game?.image}`} alt={game.image} />
                        <span>R$: {game.price?.toFixed(2)}</span>
                        <button onClick={() => history.push(`/payment/${game.id}`)}>Ver Mais</button>
                    </Card>
                ))
       }

        </CardContainer>
        </>
    )
}
