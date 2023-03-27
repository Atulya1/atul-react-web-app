import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./reducers/hello";
import example from "./reducers/example";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
import Todos from "./todos-component";
import ExampleReduxExampleComponent from "./example-redux-example-component";
const store = configureStore({
    reducer: {hello, example, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
                <ExampleReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;