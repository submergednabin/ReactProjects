import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expense.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) =>{
    const [filterYear, setFilterYear] =  useState('2020');    
    const filterChangeHandler = (selectedYear) => {
        console.log('Expense.js');
        setFilterYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense=> {
        // Maps the selectedYear to the view
        return expense.date.getFullYear().toString() === filterYear;
    });

    

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
    );
}
export default Expense;