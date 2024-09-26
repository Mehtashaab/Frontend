import { useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyinfo.js'


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  
  // Check if currencyInfo is valid before proceeding
  if (!currencyInfo || typeof currencyInfo !== 'object') {
    console.log("Currency info is not valid", currencyInfo);
    return null;
  }

  console.log("Type of currencyInfo:", typeof currencyInfo);

  // List available options for conversion
  const options = Object.keys(currencyInfo);
  console.log("Currency options:", options);

  // Swap the 'from' and 'to' currencies
  const swap = () => {
    setFrom(prevFrom => to);
    setTo(prevTo => from);
    
    // Perform conversion based on the existing rates
    const newAmount = amount * currencyInfo[to];
    setConvertedAmount(newAmount);
  };

  // Convert the amount to the 'to' currency
  const convert = () => {
    if (currencyInfo[to]) {
      const newAmount = amount * currencyInfo[to];
      setConvertedAmount(newAmount);
    } else {
      console.error("Conversion rate for the target currency not found.");
    }
  };

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3793689/pexels-photo-3793689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App