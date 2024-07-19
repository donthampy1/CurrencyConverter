import React from 'react'

function Currencyinput({CurrencyOptions,selectedCurrency,onChangeCurrency,Amount,onChangeAmount}) {
  return (
   <div >

    <input 
    type='number' 
    className='  border border-black bg-slate-100 rounded-lg   p-1' 
    value={Amount}
    onChange={onChangeAmount}
    ></input>

    <select className='m-1 border rounded-lg border-orange-950 p-1'
    multiple={false}
    value={selectedCurrency}
    onChange={onChangeCurrency}
    >
      {CurrencyOptions.map(option => (
        <option  className='rounded-lg  bg-red-600'
        key={option} 
        value={option}>
         {option}
        </option>

      ))}
        
    </select>
   </div>
  )
}

export default Currencyinput