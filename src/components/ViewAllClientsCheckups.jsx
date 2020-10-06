import React, { Component } from "react";
import CheckupService from "../services/CheckupService";
import { withRouter } from "react-router-dom";

class ViewAllClientsCheckups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientId: this.props.clientId,
            checkups: [],
        };
        this.addCheckup = this.addCheckup.bind(this);
        this.editCheckup = this.editCheckup.bind(this);
        this.deleteCheckup = this.deleteCheckup.bind(this);
        this.viewCheckup = this.viewCheckup.bind(this);
    }

    componentDidMount() {
        CheckupService.getAllCheckupsByClientId(this.state.clientId).then(
            (res) => {
                this.setState({ checkups: res.data });
            }
        );
    }

    editCheckup(id) {
        this.props.history.push(`/update-checkup/${id}`);
    }

    deleteCheckup(id) {
        CheckupService.deleteCheckup(id).then((res) => {
            this.setState({
                checkup: this.state.checkups.filter(
                    (checkup) => checkup.id !== id
                ),
            });
        });
    }

    addCheckup(clientId) {
        this.props.history.push(`/add-checkup/${clientId}`);
    }

    viewCheckup(id) {
        this.props.history.push(`/view-checkup/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Checkup List</h2>
                <div className="row">
                    <button
                        className="btn btn-primary"
                        onClick={() => this.addCheckup(this.state.clientId)}
                    >
                        Add Checkup To This Client
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Checkup ID</th>
                                <th>Checkup Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.checkups.map((checkup) => (
                                <tr key={checkup.id}>
                                    <td>{checkup.id}</td>
                                    <td>{checkup.date}</td>

                                    <td>
                                        <button
                                            className="btn btn-info"
                                            onClick={() => {
                                                this.editCheckup(checkup.id);
                                            }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            style={{ marginLeft: "10px" }}
                                            className="btn btn-danger"
                                            onClick={() => {
                                                this.deleteCheckup(checkup.id);
                                                window.location.reload(false);
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            style={{ marginLeft: "10px" }}
                                            className="btn btn-success"
                                            onClick={() => {
                                                console.log(checkup.id);
                                                this.viewCheckup(checkup.id);
                                            }}
                                        >
                                            View Checkup
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withRouter(ViewAllClientsCheckups);
