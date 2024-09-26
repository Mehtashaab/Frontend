import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/329c0eb75fe1057bc7123ecc/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates)) 
        console.log("first console in hooks",data);
    }, [currency])
    console.log("this is second console on hooks",data);
    return data
}

export default useCurrencyInfo;