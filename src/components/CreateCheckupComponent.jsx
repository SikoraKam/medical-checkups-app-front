import React, { Component } from "react";

class CreateCheckupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
            client_Id: null,
        };
        this.changeClient_IdHandler = this.changeClient_IdHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveCheckup = this.saveCheckup.bind(this);
    }

    changeDateHandler(event) {
        this.setState({ date: event.target.value });
    }

    changeClient_IdHandler(event) {
        this.setState({ client_Id: event.target.value });
    }

    saveCheckup(event) {
        event.preventDefault();
        let checkup = {};
    }

    render() {
        return <div></div>;
    }
}

export default CreateCheckupComponent;
