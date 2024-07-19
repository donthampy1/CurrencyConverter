import { useState,useEffect } from 'react'
import Currencyinput from './Components/Currencyinput'
import './App.css'

function App() {
  const [data,setData]=useState([])


  const [CurrencyOptions,setCurrencyOptions] = useState([])

  const [fromCurrency,setFromCurrency] = useState("inr")

  const [toCurrency,setToCurrency] = useState("usd")

  const [FromAmount, setFromAmount] = useState(1)

  const [ToAmount, setToAmount] = useState(0)

  const [updated,setUpdated] = useState(true)


  
  

  const ApiUrl=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurrency}.json`
 
 
    useEffect(() => {
      const fetchCurrencyrates = async () =>{
        try{
       
          const response = await 
          fetch(ApiUrl)
          if(!response.ok) {
            throw new  Error ('http response error')
          }
          
          const data = await response.json()
          
          
          
          
          setData(data[fromCurrency])

          setCurrencyOptions([...Object.keys(data[fromCurrency])])
          
          
          
          
        } catch (error) {
          console.log('fetching error')
        }
      }
      fetchCurrencyrates()
    },[])

     



useEffect(() => {
  const updateCurrencyrates = async () =>{
    try{
   
      const response = await 
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCurrency}.json`)
      if(!response.ok) {
        throw new  Error ('http response error')
      }
      
      const data = await response.json()
      
      
      
      
      setData(data)
      console.log("look",data);


let new11 = updated
if (updated == true) {
  console.log('qqqqqqqqqqqq')
  let final = data[fromCurrency][toCurrency] * FromAmount


      console.log(final,"erttt")
      setToAmount(final)
}else {
  let final = data[fromCurrency][fromCurrency] / data[fromCurrency][toCurrency] * ToAmount
     console.log("hoyhoyhoy",data[fromCurrency][toCurrency],final)
      setFromAmount(final)
}

      
      
    } catch (error) {
      console.log('fetching error')
    }



  }
  updateCurrencyrates()
},[fromCurrency,FromAmount,toCurrency,ToAmount])

  

  return (
    <>
    <div className=' w-auto  max-w-md  mx-auto shadow-2xl p-4 text-center flex-grow bg-slate-100'>
      <h1 className='text-2xl rounded-xl text-black-600 text-center shadow-2xl m-5 bg-slate-100 p-3'>Currency Converter</h1>
      <div className='p-4 shadow-2xl m-3 rounded-xl'>
      <Currencyinput
      CurrencyOptions={CurrencyOptions}
      selectedCurrency={fromCurrency}

      onChangeCurrency={(e)=> setFromCurrency(e.target.value)}
      Amount={FromAmount}



      onChangeAmount={(e)=>{
        setFromAmount(e.target.value);
        setUpdated(true)
        console.log(updated)
      
      }}


     />



      <div className='text-center text-3xl'>=</div>


      <Currencyinput
      CurrencyOptions={CurrencyOptions}
      selectedCurrency={toCurrency}

      onChangeCurrency={(e)=> setToCurrency(e.target.value)}
      Amount={ToAmount}
      onChangeAmount={(e)=>{
        setToAmount(e.target.value);
        setUpdated(false)
        console.log(updated)

      
      }}
      
      
      />
      </div>
      </div>
      
    </>
  )
  
}

export default App
