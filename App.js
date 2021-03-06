import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header>Tech Stack</Header>
        <LibraryList />
      </View>
    </Provider>
  );

export default App;
