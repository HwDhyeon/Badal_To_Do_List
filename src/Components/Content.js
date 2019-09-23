import React from 'react';
import styled from 'styled-components';
import Clock from './Clock'
import Todo from './Todo'

const Content = () => (
    <Container>
        <Clock />
        <Todo />
    </Container>
);

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 33px;
    width: 100%;
    height: calc(100% - 33px);
    color: white;
    overflow: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default Content;