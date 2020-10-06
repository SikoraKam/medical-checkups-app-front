import React, { Component } from "react";
import CheckupService from "../services/CheckupService";
import { withRouter } from "react-router";
import ClientService from "../services/ClientService";

class CreateCheckupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
            client_Id: this.props.match.params.id,
            client: {},
            isLoaded: false,
        };
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveCheckup = this.saveCheckup.bind(this);
    }
    componentDidMount() {
        ClientService.getClientById(this.state.client_Id).then((res) => {
            this.setState({ client: res.data, isLoaded: true });
        });
    }

    changeDateHandler(event) {
        this.setState({ date: event.target.value });
    }

    saveCheckup(event) {
        event.preventDefault();
        let checkup = {
            date: this.state.date,
        };
        CheckupService.createCheckupWithClientId(
            checkup,
            this.state.client_Id
        ).then((res) => {
            this.props.history.push(`/view-client/${this.state.client_Id}`);
        });
    }
    cancel() {
        this.props.history.push(`/view-client/${this.state.client_Id}`);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">
                                Add Checkup To Client
                                {this.state.isLoaded
                                    ? " " +
                                      this.state.client.name[0].toUpperCase() +
                                      this.state.client.name.slice(1)
                                    : ""}
                                {this.state.isLoaded
                                    ? " " +
                                      this.state.client.lastname[0].toUpperCase() +
                                      this.state.client.lastname.slice(1)
                                    : ""}
                            </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Date: </label>
                                        <input
                                            placeholder="Date"
                                            name="date"
                                            className="form-control"
                                            value={this.state.date}
                                            onChange={this.changeDateHandler}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveCheckup}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateCheckupComponent);
