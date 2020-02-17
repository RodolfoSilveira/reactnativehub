import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = props =>
  createAppContainer(
    createStackNavigator(
      {
        Main: {
          screen: ({navigation}) => {
            const {database} = props;
            return <Main database={database} navigation={navigation} />;
          },
        },
        User,
        Repository,
      },
      {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        },
      }
    )
  );

export default Routes;
