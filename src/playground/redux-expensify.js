import { createStore, combineReducers, bindActionCreators} from 'redux';







const unsubscribe = store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

 const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: -21000}));
 const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt:-1000}));

// store.dispatch(removeExpense({id: expenseOne.expenses.id}))

// store.dispatch(editExpense(expenseTwo.expenses.id,{amount: 500}));
 //store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());

// store.dispatch(setStartDate(500));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses : [{
        id: 'dkdjskdksjd',
        description: 'January rent',
        note: 'this was the final paument from that address',
        amount: 54500,
        createdAt: 0 
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

