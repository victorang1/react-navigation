import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux'
import RouteNavigation from './navigation';

const App = () => {
    return <Provider store={store}>
        <RouteNavigation />
    </Provider>
}

export default App;