import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
import AuthService from "./services/AuthService";
import HomeComponent from "./components/boards/HomeComponent";
import LoginPageComponent from "./components/LoginPageComponent";
import RegisterPageComponent from "./components/RegisterPageComponent";
import ClientProfileComponent from "./components/ClientProfileComponent";
import ClientBoardComponent from "./components/boards/ClientBoardComponent";
import ManagerBoardComponent from "./components/boards/ManagerBoardComponent";
import AdminBoardComponent from "./components/boards/AdminBoardComponent";

function App() {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showManagerBoard, setShowManagerBoard] = useState(false);
    const [actualClient, setActualClient] = useState(undefined);

    useEffect(() => {
        const client = AuthService.getActualClient();
        if (client) {
            setActualClient(client);
            setShowAdminBoard(client.roles.includes("ADMIN"));
            setShowManagerBoard(client.roles.includes("MANAGER"));
        }
    });

    const logout = () => {
        AuthService.logout();
    };

    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="navbar-brand">
                                Home
                            </Link>
                        </li>
                        {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                        )}
                        {showManagerBoard && (
                            <li className="nav-item">
                                <Link to={"/manager"} className="nav-link">
                                    Manager Board
                                </Link>
                            </li>
                        )}
                        {actualClient && (
                            <li className="nav-item">
                                <Link to={"/client"} className="nav-link">
                                    Client Board
                                </Link>
                            </li>
                        )}
                    </div>

                    {actualClient ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {actualClient.name} {actualClient.lastname}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/login"
                                    className="nav-link"
                                    onClick={logout}
                                >
                                    Logout
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>

                <HeaderComponent />
                <div className="container">
                    <Switch>
                        {" "}
                        http://localhost:3000/
                        <Route
                            exact
                            path={["/", "/home"]}
                            component={HomeComponent}
                        />
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
                        <Route
                            exact
                            path="/login"
                            component={LoginPageComponent}
                        />
                        <Route
                            exact
                            path="/register"
                            component={RegisterPageComponent}
                        />
                        <Route
                            exact
                            path="/profile"
                            component={ClientProfileComponent}
                        />
                        <Route
                            path="/client"
                            component={ClientBoardComponent}
                        />
                        <Route
                            path="/manager"
                            component={ManagerBoardComponent}
                        />
                        <Route path="/admin" component={AdminBoardComponent} />
                        <ListClientComponent />
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
