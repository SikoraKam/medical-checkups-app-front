import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/AuthService";

class LoginPageComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changePasswordHandler(event) {
        this.setState({ password: event.target.value });
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    handleLogin(event) {
        event.preventDefault();

        this.setState({ isLoading: true, message: "" });
        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("TODO"); //TODO
                    window.location.reload();
                },
                (error) => {
                    const responseMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        isLoading: false,
                        message: responseMessage,
                    });
                }
            );
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const required = (value) => {
            if (!value) {
                return (
                    <div className="alert alert-danger" role="alert">
                        Field required
                    </div>
                );
            }
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Login Page</h3>
                            <div className="card-body">
                                <Form
                                    onSubmit={this.handleLogin}
                                    ref={(c) => {
                                        this.form = c;
                                    }}
                                >
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <Input
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <Input
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            className="btn btn-secondary btn-block"
                                            disabled={this.state.isLoading}
                                        >
                                            {this.state.isLoading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>LOGIN</span>
                                        </button>
                                    </div>

                                    {this.state.message && (
                                        <div className="form-group">
                                            <div
                                                className="alert alert-danger"
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
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPageComponent;
