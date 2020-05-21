/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Router from '../src/router/index';
import Content from '../src/pages/Home/HomePage';

export default class App extends Component{
  render(){
    return (
       	<Content/>
        
      );
  }
}