import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    process.env.NODE_ENV && process.env.NODE_ENV === 'development' ?
    composeWithDevTools(
        applyMiddleware(...middleware)
    ) : compose(
        applyMiddleware(...middleware)
    )
)

export default store;