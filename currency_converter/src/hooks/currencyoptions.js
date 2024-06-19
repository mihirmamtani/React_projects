import { useEffect } from 'react'
import { useState } from 'react'

function currencyoptions(currency) {
  
    const[data, setdata]=useState({})

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/7802ec056a8bfdc6b6e9b0df/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.conversion_rates))
        // console.log(data);
    },[currency])

    console.log(data);
  return data;
}

export default currencyoptions
