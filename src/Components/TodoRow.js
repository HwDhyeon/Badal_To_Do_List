import React from 'react';
import styled from 'styled-components';
import './Fonts.css';

const TodoRow = ({ index, todo, handleClickRemove }) => (
    <Container>
        <Text onClick={() => handleClickRemove(index)}>{todo}</Text>
    </Container>
);

const Container = styled.div`
    margin: 13px 0;
    width: 80%;
    text-align: center;
`;

const Text = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 32px;
    &:hover {
        opacity: 0.4;
    }
    font-family: 'Nanum Pen Script', cursive;
`;

export default TodoRow;