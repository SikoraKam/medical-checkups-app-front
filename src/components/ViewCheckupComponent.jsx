import React, { Component } from "react";
import CheckupService from "../services/CheckupService";
import ViewResultComponent from "./ViewResultComponent";

class ViewCheckupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            checkup: {},
            showResultComponent: false,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {
        CheckupService.getCheckupById(this.state.id).then((res) => {
            this.setState({ checkup: res.data });
        });
    }

    onButtonClick() {
        !this.state.showResultComponent
            ? this.setState({
                  showResultComponent: true,
              })
            : this.setState({ showResultComponent: false });
    }

    render() {
        return (
            <div>
                <div className="card mdb-color col-md-9 offset-md-1">
                    <h3 className="text-center font-weight-bold amber-lighter-hover mb-3">
                        View Checkups
                    </h3>
                    <div className="card-body">
                        <div className="row">
                            <p>
                                Id:
                                {this.state.id}
                            </p>
                        </div>
                        <div className="row">
                            <p>
                                Date:
                                {this.state.checkup.date}
                            </p>
                        </div>
                        <div className="row">
                            <div>
                                <button
                                    className="btn btn-grape"
                                    onClick={() => this.onButtonClick()}
                                >
                                    Click
                                </button>{" "}
                                <p> </p>
                                {this.state.showResultComponent ? (
                                    <ViewResultComponent
                                        checkupId={this.state.id}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCheckupComponent;
