import React, { Component } from "react";
import CheckupService from "../services/CheckupService";

class ViewCheckupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            checkup: {},
        };
    }

    componentDidMount() {
        CheckupService.getCheckupById(this.state.id).then((res) => {
            this.setState({ checkup: res.data });
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-9 offset-md-3">
                    <h3 className="text-center">View Checkups</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Date: </label>
                            <div>{this.state.checkup.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCheckupComponent;
