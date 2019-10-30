import React, {Component} from 'react';
import {connect} from "react-redux";
import Table from "../components/table";
import Reg from '../components/registr'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            answer:null,
            data: ['На гуслях', 'Республика Гаити', 'Московские каникулы', 1380, 'Шаинский', 'Красный квадрат', 'Остроты перца',
                'Идальго', 'Олдос Хаксли', 'Бездна Челленджера'],
            timer: 30
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.Name && !prevProps.Name) {
            setInterval(() => {
                let {timer} = this.state;
                if (timer > 0) {
                    this.setState({timer: timer - 1})
                } else {
                    this.setState({timer: 30});
                    alert('Game Over');
                }
            }, 1000)
        }
    }


    SaveAnswer = (answer, Index) => {
        let {i, data} = this.state;
        if (i < 9) {
            if (data.indexOf(answer) !== -1) {
                this.setState({answer: Index});
                setTimeout(() => {
                    this.setState({i: i + 1, timer: 30, answer: -1});
                }, 2000)
            } else {
                alert('Game Over');
                this.setState({i: 0,timer:30})
            }
        } else {
            this.setState({i: 0})
        }
    };


    render() {
        let {questions, answers, Name} = this.props;
        let {i, timer, answer} = this.state;
        return (
            <>
                {Name ?
                    <div className='b'>
                        <div className='divTitle'><h1>{`Good Luck ${Name}`}</h1></div>
                        <div className='container'>
                            <div className='container2'>
                                <div className='questionsBlock'>
                                    <p className='questions'>{questions[i]}</p>
                                </div>
                                <div className='select'>
                                    <div className={`answer1 ${answer === 1 ? 'active' : ''}`}
                                         onClick={() => this.SaveAnswer(answers[i][1], 1)}>
                                        <p className='answerP'>{answers[i][1]}</p></div>
                                    <div className={`answer1 ${answer === 2 ? 'active' : ''}`}
                                         onClick={() => this.SaveAnswer(answers[i][2],2)}>
                                        <p className='answerP'>{answers[i][2]}</p></div>
                                    <div className='timer'><p className='timerP'>{timer}</p></div>
                                    <div className={`answer1 ${answer === 3 ? 'active' : ''}`}
                                         onClick={() => this.SaveAnswer(answers[i][3],3)}>
                                        <p className='answerP'>{answers[i][3]}</p></div>
                                    <div className={`answer1 ${answer === 4 ? 'active' : ''}`}
                                         onClick={() => this.SaveAnswer(answers[i][4],4)}>
                                        <p className='answerP'>{answers[i][4]}</p></div>
                                </div>
                            </div>
                            <Table i={i}/>
                        </div>
                    </div> : <Reg/>}
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    questions: state.questions,
    answers: state.answers,
    Name: state.Name,
});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default Container;
