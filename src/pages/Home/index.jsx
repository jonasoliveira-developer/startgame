import React from "react";
import { Container } from './styled';

import {CardList}    from "../../components/CardList";

export const Home = () => {

    return (
        <Container>
            <h1>Os Melhores Games Você Encontra Aqui!</h1>
            <CardList />
        </Container>
    )
}