/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';

const db = require('./src/components/Handlers/database.js');

const App: () => Node = () => {
  try {
    db.createContactsTable();
  } catch (error) {
    console.log('Failed to create contacts table ' + error);
  }
  try {
    db.createGroupsTable();
  } catch (error) {
    console.log('Failed to create groups table ' + error);
  }
  return <Router />;
};

export default App;