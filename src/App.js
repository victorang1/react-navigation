import React from 'react';
import { store, persistor } from './store';
import { Provider } from 'react-redux'
import RouteNavigation from './navigation';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App = () => {
    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            <RouteNavigation />
        </PersistGate>
    </Provider>
}

export default App;