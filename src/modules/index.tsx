import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';
import './index.css';

function App() {
    return (
        <div className="App">
            <Layout>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Layout>
        </div>
    );
}

export default App;
