import React, { Component } from "react";
import CheckupService from "../services/CheckupService";

class ListCheckupsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
        };
    }

    componentDidMount() {
        CheckupService.getCheckups().then((res) => {
            this.state({ checkups: res.data });
        });
        this.props.history.push("/checkups");
    }

    editCheckup(id) {
        this.props.history.push(`/update-checkup/${id}`);
    }

    render() {
        return <div></div>;
    }
}

export default ListCheckupsComponent;
