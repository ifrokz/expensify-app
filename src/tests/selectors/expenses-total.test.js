import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test ( 'sould return 0 if no expenses', ( ) => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0); 
});

test ( 'sould correctly add up a single expense', ( ) => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195); 
});

test ( 'sould correctly add up multiple expenses', ( ) => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195); 
});