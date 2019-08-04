import React from 'react';

import { Container, Label } from './styles'

const Card = ({ data }) => {
    return (
        <Container done={data.done}>
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt="icon" />}
        </Container>
    );
};

export default Card;