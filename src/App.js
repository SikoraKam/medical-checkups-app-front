import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListClientComponent from "./components/ListClientComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateClientComponent from "./components/CreateClientComponent";
import UpdateClientComponent from "./components/UpdateClientComponent";
import ViewClientComponent from "./components/ViewClientComponent";
import ListCheckupsComponent from "./components/ListCheckupsComponent";
import ViewCheckupComponent from "./components/ViewCheckupComponent";
import ViewResultComponent from "./components/ViewResultComponent";
import CreateCheckupComponent from "./components/CreateCheckupComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        {" "}
                        http://localhost:3000/
                        <Route path="/" exact component={ListClientComponent} />
                        <Route
                            path="/clients"
                            component={ListClientComponent}
                        />
                        <Route
                            path="/add-client"
                            component={CreateClientComponent}
                        />
                        <Route
                            path="/update-client/:id"
                            component={UpdateClientComponent}
                        />
                        <Route
                            path="/view-client/:id"
                            component={ViewClientComponent}
                        />
                        <Route
                            path="/checkups"
                            component={ListCheckupsComponent}
                        />
                        <Route
                            path="/view-checkup/:id"
                            component={ViewCheckupComponent}
                        />
                        <Route
                            path="/add-checkup/:id"
                            component={CreateCheckupComponent}
                        />
                        <Route
                            path="/view-results/:checkupId"
                            component={ViewResultComponent}
                        />
                        <ListClientComponent />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
