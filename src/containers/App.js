import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

export class App extends Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <h1>Hello Thomes</h1>
        );
    }
}

function mepStateToProps(state){
    return state;
}

export default connect( mepStateToProps, actions )(App);