import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BaseLayout } from './components/BaseLayout';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LocationList from './components/LocationList'
import AddLocation from './components/AddLocation'

ReactDOM.render(
    <BrowserRouter>
        <Container>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact component={LocationList} />
                    <Route path="/add-location" exact component={AddLocation} />
                </Switch>
            </BaseLayout>
        </Container>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
