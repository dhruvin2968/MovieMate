 import './App.css'
 import { AllRoutes } from './routes/AllRoutes';
 import { Headerr } from './components';
 import { Footerr } from './components';
 import { Toaster } from 'react-hot-toast';
 function App() {
  return (   
    <div className="App dark:bg-slate-900 bg-slate-200 ">
      <Toaster/> 
      <Headerr/>
      <AllRoutes/>
      <Footerr/>
    </div>
  )
}

export default App;

