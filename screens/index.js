import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import CreateStore from '../redux';

const store = CreateStore();

function AppContainer(props) {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

AppContainer.propTypes = {};

export default AppContainer;

// const styles = StyleSheet.create({});
