import React from 'react'

export const Transaction = ({item, bill}) => {
  return (
    <div className='transaction flex box-setting'>
          <p className='item'>{item}</p>
       <p className='bill'>{bill}</p>   
    </div>
  )
}
