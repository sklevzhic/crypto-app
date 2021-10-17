import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {HomePage} from "./pages/Home";
import {CoinPage} from './pages/CoinPage';
import {Header} from './components/Header';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const App = () => {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div>

            <Container>
                <Header/>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/coins/:coin" component={CoinPage}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default App;
