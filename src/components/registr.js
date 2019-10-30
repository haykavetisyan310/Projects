import React, {Component} from 'react';
import {connect} from "react-redux";
import {PlayerName} from "../store/actions";
import img from '../assets/images/logo.png'

class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,

        }
    }

    Save = (ev) => {
        this.setState({name:ev.target.value})
    };

    SaveName = () => {
      let {name} = this.state;
      this.props.PlayerName(name)
    };

    render() {
        return (
            <div className='imgdiv'>
                <img src={img} alt='/'/>
                <div className='inputContainer'>
                    <form>
                        <input type='text' placeholder='Enter your name' onChange={this.Save} className='input'/>
                        <span className='btn' onClick={this.SaveName}>Start</span>
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    PlayerName,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Reg);

export default Container;

