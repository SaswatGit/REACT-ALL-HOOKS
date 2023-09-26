import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo';
import CustomHooks from './components/CustomHooks';

function App() {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<UseState />} />
            <Route path='useeffect/' element={<UseEffect />} />
            <Route path='usecontext/' element={<UseContext />} />
            <Route path='useref/' element={<UseRef />} />
            <Route path='usereducer/' element={<UseReducer />} />
            <Route path='usecallback/' element={<UseCallback />} />
            <Route path='usememo/' element={<UseMemo />} />
            <Route path='customhooks/' element={<CustomHooks />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
