import React from 'react'

export const Balance = () => {
  return (
      <div className='container'>
          <h4>Your Balance</h4>
          <p>$1540.64</p>
          <div className='flex box-setting income-expense'>
            <div className="income">
                <p>Income</p>
                <p>+$2000.64</p>
            </div>
            <hr />
            <div className="expense">
                <p>Expense</p>
                <p>-$460</p>
            </div>
          </div>
        </div>

  )
}
