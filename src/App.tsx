import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {HomePage} from "./pages/Home";
import { CoinPage } from './pages/CoinPage';
import { Header } from './components/Header';


function App() {
    return (
        <div>

            <Container>
                <Header />
                <HomePage />
                <CoinPage />
            </Container>


        </div>
    );
}

export default App;
