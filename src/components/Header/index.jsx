import React from "react";
import { ContainerHeader } from './styled';

import { Cart } from "../Cart";

export const Header = () => {
    return (
        <ContainerHeader>
            <h1>Start<span>Games</span></h1>
            <Cart />
        </ContainerHeader>
    )
}