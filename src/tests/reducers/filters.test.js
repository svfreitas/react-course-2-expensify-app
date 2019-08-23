import filtersReducer  from '../../reducers/filters';
import moment from 'moment';

test ('should setup default filter values', () => {
    const  state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 
    })
})

test ('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect (state.sortBy).toBe('amount');

});

test ('should set sortBy to date', () => {
    const currentState = {   //to force a change in the sortBy
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type:'SORT_BY_DATE'});
    expect (state.sortBy).toBe('date');

});

test ('should set text to TEST_STRING" ', () => {
    const action = {
        type: 'SET_TEXT_FILTER', 
        text: 'TEST_STRING'
    };
    const state = filtersReducer(undefined, action);
    expect (state.text).toBe(action.text);

});

test ('should set startDate" ', () => {
    const action = {
        type: 'SET_START_DATE', 
        startDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect (state.startDate).toEqual(action.startDate);

});

test ('should set endDate" ', () => {
    const action = {
        type: 'SET_END_DATE', 
        startDate: moment()
    };
    const state = filtersReducer(undefined, action);
    expect (state.endDate).toEqual(action.endDate);

});