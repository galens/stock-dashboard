import StockDashboard from './components/StockDashboard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div className='bg-sky-200 grid py-4 min-h-screen'>
      <StockDashboard />
      <ToastContainer />
    </div>
  );
}

export default App;