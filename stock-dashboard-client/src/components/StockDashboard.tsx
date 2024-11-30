import React, { useRef, useState, useEffect } from 'react';
import StockItem from './StockItem';
import { toast } from 'react-toastify';
import { addStock, getStocks, deleteStock } from '../api/stock';

const StockDashboard = () => {

  const [newTicker, setNewTicker] = useState('');
  const [tickerList, setTickerList] = useState([]);

  const inputRef = useRef();

  // attempts to add a new ticker
  const addTicker = async () => {
    const ticker = inputRef?.current?.value;
    if (!ticker) {
      // output to user they cant add an empty ticker
      return null;
    }

    try {
      // makes the post request to the server
      const result = await addStock(ticker);
      if (result?.success) {
        const refreshedStocks = await getStocks();
        setTickerList(refreshedStocks?.data);
        toast.success(`Stock ${ticker} has been added!`);
      } else {
        toast.error(result?.error);
      }
    } catch (error) {
        toast.error(`There was an issue adding the ticker ${ticker}`);
    }

    inputRef.current.value = '';
  }

  // attempts to delete an existing ticker
  const deleteTicker = async (ticker: string) => {
    setTickerList((prev) => {
      return prev.filter((item) => item.name !== ticker)
    });

    try {
      // makes the delete request to the server
      const result = await deleteStock(ticker)
        if (result?.success) {
          const refreshedStocks = await getStocks();
          setTickerList(refreshedStocks?.data);
          toast.success(`Stock ${ticker} has been removed!`);
        }
      } catch (error) {
        toast.error(`There was an issue deleting the ticker ${ticker}`);
      }
  }

  const getAndSetStocks = async () => {
    const refreshedStocks = await getStocks();
    setTickerList(refreshedStocks?.data);
  }
  
  // initial use effect on startup, fired once
  useEffect(() => {
    getAndSetStocks();
  }, []);

  // polling use effect, fires every second to refresh data
  useEffect(() => {
    const timerId = setTimeout(getAndSetStocks, 1000);
    return () => clearInterval(timerId);
  })

  return (
    <div className='bg-white place-self-center w-11/12 max-w-[600px] flex flex-col p-7 min-h-[600px] rounded-xl'>
      <div className='flex items-center mt-7 gap-2'>
        <h1 className='text-3xl font-semibold'>Real-Time Stock Dashboard</h1>
      </div>

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder: text-slate-600'
          type='text'
          placeholder='Add a stock ticker'
          onChange={(e) => setNewTicker(e.target.value)}
          ref={inputRef}
        />
        <button
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
          onClick={() => addTicker()}
        >
          ADD +
        </button>
      </div>

      <div>
        {tickerList && tickerList.map((ticker, index) => {
          return <StockItem key={index} ticker={ticker.name} price={ticker.price} deleteTicker={deleteTicker} />
        })}
      </div>
    </div>
  )
}

export default StockDashboard