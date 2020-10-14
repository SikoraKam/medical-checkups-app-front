import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/AuthService";

class RegisterPageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            registered: false,
            message: "",
        };
    }

    changeNameHandler(event) {
        this.setState({ name: event.target.value });
    }
    changeLastNameHandler(event) {
        this.setState({ lastname: event.target.value });
    }
    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler(event) {
        this.setState({ password: event.target.value });
    }

    registerHandler(event) {
        event.preventDefault();

        this.setState({ message: "", registered: false });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.name,
                this.state.lastname,
                this.state.email,
                this.state.password
            ).then(
                (res) => {
                    this.setState({
                        registered: true,
                        message: res.data.message,
                    });
                },
                (error) => {
                    const responseMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        registered: false,
                        message: responseMessage,
                    });
                }
            );
        }
    }

    render() {
        const required = (value) => {
            if (!value) {
                return (
                    <div className="alert alert-danger" role="alert">
                        This field is required!
                    </div>
                );
            }
        };

        const email = (value) => {
            if (!isEmail(value)) {
                return (
                    <div className="alert alert-danger" role="alert">
                        This is not a valid email.
                    </div>
                );
            }
        };

        const vname = (value) => {
            if (value.length < 3 || value.length > 20) {
                return (
                    <div className="alert alert-danger" role="alert">
                        The name must be between 3 and 20 characters.
                    </div>
                );
            }
        };
        const vlastname = (value) => {
            if (value.length < 3 || value.length > 20) {
                return (
                    <div className="alert alert-danger" role="alert">
                        The lastname must be between 3 and 20 characters.
                    </div>
                );
            }
        };

        const vpassword = (value) => {
            if (value.length < 5 || value.length > 40) {
                return (
                    <div className="alert alert-danger" role="alert">
                        The password must be between 5 and 40 characters.
                    </div>
                );
            }
        };

        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.registerHandler}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        {!this.state.registered && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        value={this.state.name}
                                        onChange={this.changeNameHandler}
                                        validations={[required, vname]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Name</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.changeLastNameHandler}
                                        validations={[required, vlastname]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.changeEmailHandler}
                                        validations={[required, email]}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.changePasswordHandler()}
                                        validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        )}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

export default RegisterPageComponent;
