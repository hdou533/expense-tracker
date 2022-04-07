import React from 'react'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  return (
   
      
    <div className="container">
      <h4>History</h4>
      <Transaction item='cash' bill="-$400" />
      <Transaction item='income' bill="+$2000.64" />
      <Transaction item='food' bill="-$60"/>
    </div>

  )
}
