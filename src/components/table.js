import React, {Component} from 'react';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let {i} = this.props;
        return (
            <div className='tableBlock'>
                <div className='div1' style={i === 0 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>10</p><p className='p'>1.000.000</p></div>
                <div className='div2' style={i === 9 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>9</p><p className='p'>500.000</p></div>
                <div className='div3' style={i === 8 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>8</p><p className='p'>250.000</p></div>
                <div className='div4' style={i === 7 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>7</p><p className='p'>150.000</p></div>
                <div className='div5' style={i === 6 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>6</p><p className='p'>100.000</p></div>
                <div className='div6' style={i === 5 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>5</p><p className='p'>50.000</p></div>
                <div className='div7' style={i === 4 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>4</p><p className='p'>25.000</p></div>
                <div className='div8' style={i === 3 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>3</p><p className='p'>10.000</p></div>
                <div className='div9' style={i === 2 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>2</p><p className='p'>5.000</p></div>
                <div className='div10' style={i === 1 ? {backgroundImage:'linear-gradient(orange, #844f00)'} : null}>
                    <p className='p'>1</p><p className='p'>1000</p></div>
            </div>
        );
    }
}

export default Table;
