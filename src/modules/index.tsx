import { HashRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';
import './index.css';

function App() {
    return (
        <div className="App">
            <Layout>
                <Router>
                    <Routes />
                </Router>
            </Layout>
        </div>
    );
}

export default App;
