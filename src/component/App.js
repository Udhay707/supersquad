import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import characters from '../reducer/Rootreducer';
const store = createStore(characters);
export default class App extends Component {
    render() {
        console.log(store.getState())
        return (
            <Provider store={store}>
                <div>
                    {console.log(store)}
                    My Super Squad
                </div>
            </Provider>
        )
    }
}
