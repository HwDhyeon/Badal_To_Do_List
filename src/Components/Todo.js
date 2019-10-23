import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import './Fonts.css'

class Todo extends React.Component {
    state = {
        todoList: []
    };

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        });
    }

    handleInputKeyPress = (event) => {
        const {
            target: { value }
        } = event;

        if (event.key === 'Enter' && event.target.value !== '') {
            this.setState(
                state => ({ todoList: [...state.todoList, value] }),
                () =>
                    localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
            );
            event.target.value = '';
        }
    }

    handleClickRemove = (index) => {
        this.setState(
            state => ({
                todoList: [
                    ...state.todoList.slice(0, index),
                    ...state.todoList.slice(index + 1)
                ]
            }),
            () =>
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
        )
    }

    render() {
        return (
            <Container>
                <Input
                    autoFocus
                    placeholder='To do today'
                    onKeyPress={this.handleInputKeyPress}
                />
                <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove} />
            </Container>
        );
    }
}

const Container = styled.div`
    margin-top: 44px;
    text-align: center;
`;

const Input = styled.input`
    width: 20%;
    height: 33px;
    padding: 7px;
    outline: none;
    border: none;
    background: transparent;
    font-size: 32px;
    color: white;
    text-align: center;
    ::placeholder {
        color: #C4B73B;
    }
    &:focus {
        width: 25%;
    }
    font-family: 'Nanum Pen Script', cursive;
`;

export default Todo;