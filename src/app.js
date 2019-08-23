import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css'; 
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

const unsubscribe = store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render (jsx, document.getElementById('app'));