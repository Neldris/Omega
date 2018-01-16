/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {ApplicationNavigation} from './src/api/omega/navigation';
import {connect} from 'react-redux';
import {addNavigationHelpers, NavigationActions} from 'react-navigation';
import {BackHandler} from "react-native";

/***
 * Main Application Entry Point
 */
export class App extends Component<{}> {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    /***
     *  Back Manager
     * @returns {boolean}
     */
    onBackPress = () => {
        const {dispatch, mainNav} = this.props;
        if (mainNav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {dispatch, mainNav} = this.props;

        /***
         * Returning the Main Navigation Entry Point
         */
        return (
            <ApplicationNavigation
                navigate={addNavigationHelpers({
                    dispatch: dispatch,
                    state: mainNav
                })}
            />
        );
    }
}

export function mapStateToProps(state) {
    return {
        mainNav: state.mainNav
    }
}
export default connect(mapStateToProps)(App);