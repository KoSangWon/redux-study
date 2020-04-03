//src에서 코드모두 관리할 것임
import React, {Component} from "react";
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import store, {SET_IS_LOADED, ADD, MINUS} from '../store';
import {connect} from 'react-redux';


const Home=(props) => {
    console.log('props', props);
    const {isLoaded, toggleIsLoaded, count, add, minus} = props;

    return(
        <SafeAreaView>
            <Text>isLoaded: {isLoaded ? 'true' : 'false'}</Text>
            <Text>count: {count}</Text>
            <TouchableOpacity
                style={{width: 100, height: 100, backgroundColor: 'green'}}
                onPress={() => {
                    toggleIsLoaded(!isLoaded);
            }}>
                <Text>hihi</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {
                    add(count);
                }}
            >
                <Text>press me to add</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    minus(count);
                }}
            >
                <Text>press me to minus</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

//getState역할(가져올때 씀)
const mapStateToProps = state => {
    return {
        isLoaded: state.isLoaded,
        count: state.count
    };
}

//dispatch역할(바꿀때 씀)
const mapDispatchToProps = dispatch => {
    return  {
        toggleIsLoaded: isLoaded => {
            //store.dispatch({type: SET_IS_LOADED, isLoaded: asdfa})
            dispatch({type: SET_IS_LOADED, isLoaded: isLoaded});
        },
        add: count => {
            dispatch({type: ADD, count: count});
        },
        minus: count => {
            dispatch({type: MINUS, count: count});
        }
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);