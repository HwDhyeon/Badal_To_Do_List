import React from 'react';
import styled from 'styled-components';

class Clock extends React.Component {
    state = {
        date: new Date()
    }

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };

    componentDidMount() {
        this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
    }

    componentWillMount() {
        clearInterval(this.oneMinuteCall);
    }

    render() {
        const { date } = this.state;
        return (
            <Container>
                <CurDate>
                    {date.getFullYear()}&nbsp;/&nbsp;
                    {date.getMonth() + 1 < 10 ? "0" + String(date.getMonth() + 1) : date.getMonth() + 1}&nbsp;/&nbsp;
                    {date.getDate()}
                </CurDate>
                <CurDay>
                    {
                        date.getDay() === 0
                            ? "Sunday"
                            : date.getDay() === 1
                                ? "Monday"
                                : date.getDay() === 2
                                    ? "Tuesday"
                                    : date.getDay() === 3
                                        ? "wednesday"
                                        : date.getDay() === 4
                                            ? "Thursday"
                                            : date.getDay() === 5
                                                ? "Friday"
                                                : "Saturday"
                    }
                </CurDay>
                <CurTime>
                    {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
                    &nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
                    &nbsp;:&nbsp;
                    {date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}
                </CurTime>
            </Container>
        );
    }
}

const Container = styled.div`
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
`;

const CurDate = styled.div`
    font-size: 30px;
    font-family: 'Rajdhani', sans-serif;
`;

const CurDay = styled.div`
    font-size: 80px;
    font-style: italic;
    font-family: 'Courgette', cursive;
`;

const CurTime = styled.div`
    font-size: 150px;
    font-weight: 600;
    font-family: 'Nanum Gothic', sans-serif;
`;


export default Clock;