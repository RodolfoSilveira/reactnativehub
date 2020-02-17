/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import App from './src';
import {name as appName} from './app.json';
import Route from './src/routes';

import schema from './src/model/schema';
import User from './src/model/User';
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
    User,
  ],
  actionsEnabled: true,
});

const Navigation = Route({database});

AppRegistry.registerComponent(appName, () => Navigation);
