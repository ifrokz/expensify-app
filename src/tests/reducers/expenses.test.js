import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state' , () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

describe('remove expenses block', () => {
    test('should remove expense by ID', () => {
        const action = {
            type: 'REMOVE_EXPENSE', 
            id: expenses[2].id
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([expenses[0],expenses[1]]);
    });

    test('should NOT remove expense if ID not found', () => {
        const action = {
            type: 'REMOVE_EXPENSE', 
            id: '-1'
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });
});

test('should add a new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[0]
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenses[0]]);
});

describe('Edit expense block', () => {
    test('should edit an expense', () => {
        const action = {
            type:  'EDIT_EXPENSE',
            id: expenses[0].id,
            updates: {
                ...expenses[1]
            }
        };
        const state = expensesReducer(expenses,action);
        expect(state).toEqual([expenses[1],expenses[1],expenses[2]]);
    });

    test('should not edit expense if expense not found', () => {
        const action = {
            type: 'EDIT_EXPENSE',
            id: '-1',
            updates: {
                note: 'A gum'
            }
        };
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);
    });
});

