import React from 'react';
import api from '../api/api';

export const ResponseContext = React.createContext({} );


export const ResponseProvider = ({ children }) => {

    const [games, setGames] = React.useState([])

    const getGames = async (order = 1) => {
        const games = await api.get('/posts')
        
            
        setGames(games.data)
    }
    return (
        <ResponseContext.Provider value={{ getGames, games }}>
            {children}
        </ResponseContext.Provider>
    )
}

