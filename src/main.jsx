import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { thunk } from 'redux-thunk';
// import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import reducers from './redux/reducers';

const queryClient = new QueryClient();

// const store = createStore(reducers, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <Provider store={store}> */}
            <App />
            {/* </Provider> */}
        </QueryClientProvider>
    </StrictMode>,
);
