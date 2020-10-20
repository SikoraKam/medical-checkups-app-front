import React, { Component } from "react";
import ClientService from "../../services/ClientService";

class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "",
        };
    }

    componentDidMount() {
        ClientService.getPublicContent().then((res) => {
            this.setState({ view: res.data });
        });
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h2>{this.state.view}</h2>
                </header>
            </div>
        );
    }
}

export default HomeComponent;
