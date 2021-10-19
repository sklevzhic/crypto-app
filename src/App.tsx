import React, {useEffect} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {HomePage} from "./pages/Home";
import {CoinPage} from './pages/CoinPage';
import {Header} from './components/Header';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Task} from './pages/task';
import {useActions} from "./hooks/useActions";
import {useTypesSelector} from "./hooks/useTypesSelector";

const App: React.FC = () => {
    let { rowsPerPage, offset} = useTypesSelector(state => state.coins)
    let { fetchCoins } = useActions()
    useEffect(() => {
        fetchCoins(rowsPerPage, offset)
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Container>

                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/coins/:coin" component={CoinPage}/>
                            <Route path="/task" component={Task}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>

                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
