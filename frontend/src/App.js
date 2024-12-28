import Main from './Main';
import Calculator from './components/Calculator';
import Page3 from './components/Page3';
import Page2 from './components/Page2';
import Page1 from './components/Page1';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Main />} />
                <Route path='/Calculator' exact element={<Calculator />} />
                <Route path='/page3' exact element={<Page3 />} />
                <Route path='/page2' exact element={<Page2 />} />
                <Route path='/page1' exact element={<Page1 />} />
                <Route path='/Footer' exact element={<Footer />} /> 
            </Routes>
            <Footer contacts="" /> 
        </div>
    );
}

export default App;
