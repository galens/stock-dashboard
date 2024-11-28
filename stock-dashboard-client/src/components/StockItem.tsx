import React from 'react'

interface StockItemProps {
    ticker: string;
    price: string;
    removeTicker: (ticker: string) => {}
}

const StockItem: React.FC<StockItemProps> = ({ticker = 'TSLA', price = '1337.99', deleteTicker}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center'>
            <div className='tex-slate-700 ml-4 text-[17px]'>{ticker} - ${price}</div>
        </div>
        <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer' onClick={() => {deleteTicker(ticker)}}>Remove</button>
    </div>
  )
}

export default StockItem