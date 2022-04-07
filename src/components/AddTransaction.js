import React from 'react'

export const AddTransaction = () => {
  return (

    <div className="container">
        <h4>Add Transaction</h4>
        <form action="submit">
            <div className="flex form-input">
            <label htmlFor="item">Item</label>
            <input className='box-setting' type="text" name="item" placeholder='Enter text...'/>
            </div>
            <div className="flex form-input">
                <label htmlFor="amount">Amount
                    <p>(negative-expense, positive-income)</p>
                </label>
            <input className='box-setting' type="text" name="amout" placeholder='Enter amount...'/>
            </div>
            <button className='btn box-setting'>Add Transaction</button>
            
        </form>
    </div>

  )
}
