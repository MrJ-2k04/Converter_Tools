
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useRef } from "react";
import Routes from './Routes';
import Layout from 'Layout';

function App() {

  const ref = useRef();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
