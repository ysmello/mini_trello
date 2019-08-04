import React from 'react';

import { Container } from './styles'
import List from '../List'

const Board = () => {
    return (
        <Container>
            <List />
            <List />
        </Container>
    );
};

export default Board;