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
    let {rowsPerPage, offset, portfolio} = useTypesSelector(state => state.coins)
    let {fetchCoins, setPortfolio} = useActions()
    useEffect(() => {
        fetchCoins(rowsPerPage, offset)
    }, [])

    useEffect(() => {
            if (localStorage.getItem('portfolio')) {
                setPortfolio(JSON.parse(localStorage.getItem("portfolio") as any))
            }
        }, []
    )

    useEffect(() => {
        localStorage.setItem("portfolio", JSON.stringify(portfolio))
    }, [portfolio])

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
