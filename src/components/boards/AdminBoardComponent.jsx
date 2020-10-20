import React, { Component } from "react";
import ClientService from "../../services/ClientService";

class AdminBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "",
        };
    }
    componentDidMount() {
        ClientService.getAdminBoard().then((res) => {
            this.setState({ view: res.data });
        });
    }
    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.view}</h3>
                </header>
            </div>
        );
    }
}

export default AdminBoardComponent;
