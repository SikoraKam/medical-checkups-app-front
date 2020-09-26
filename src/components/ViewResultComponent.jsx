import React, { Component } from "react";
import ResultService from "../services/ResultService";
import TestService from "../services/TestService";

class ViewResultComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkupId: this.props.checkupId,
            listOfResults: [],
        };
    }

    componentDidMount() {
        ResultService.getResultsByCheckUpId(this.state.checkupId).then(
            (res) => {
                this.setState({ listOfResults: res.data });
            }
        );
    }

    checkRange(value, min, max) {
        if (value < min)
            return <span dangerouslySetInnerHTML={{ __html: "&darr;" }}></span>;
        if (value > max)
            return <span dangerouslySetInnerHTML={{ __html: "&uarr;" }}></span>;
        return "";
    }

    render() {
        return (
            <div>
                <div className="card mdb-color col-md-12 offset-md-1">
                    <h3 className="text-center font-weight-bold amber-lighter-hover mb-3">
                        View Results of Checkup {this.state.checkupId}
                    </h3>
                    <div className="card-body col-12">
                        <div className="row col-12">
                            <div>
                                {this.state.listOfResults.map((item) => (
                                    <p>
                                        Test Category: {item.test.category}
                                        <br />
                                        Test Name: {item.test.testName} <br />
                                        Value: {item.value}{" "}
                                        {this.checkRange(
                                            item.value,
                                            item.test.min,
                                            item.test.max
                                        )}
                                        <br />
                                        Range: {item.test.min} - {item.test.max}
                                        <br />
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewResultComponent;
