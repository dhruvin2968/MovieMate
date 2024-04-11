 import './App.css'
 import { AllRoutes } from './routes/AllRoutes';
 import { Headerr } from './components';
 import { Footerr } from './components';
 function App() {
  return (   
    <div className="App ">
      <Headerr/>
      <AllRoutes/>
      <Footerr/>
    </div>
  )
}

export default App;