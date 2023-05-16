import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Data from "./Components/Data/Data"
import { Route, Routes } from 'react-router-dom';
import NewData from "./Components/NewData/NewData";
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    // <div className="App">
    //   <Routes>
    //     <Route path = "/" element = {<Home/>}></Route>
    //     <Route path = "/about" element = {<About/>}></Route>
    //     <Route path = "/data" element = {<Data/>}></Route>
    //     <Route path = "/newdata" element = {<NewData/>}></Route>
    //   </Routes>
      
    // </div>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/about" element = {<About/>}></Route>
          <Route path = "/data" element = {<Data/>}></Route>
          <Route path = "/newdata" element = {<NewData/>}></Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
