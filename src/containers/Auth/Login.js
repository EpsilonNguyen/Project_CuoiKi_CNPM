import { Component } from "react";
import './Login.scss';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleOnClick = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <span>Logo</span>
                    </div>
                    <div className="cam-dashboard">
                        <span>Camera Dashboard</span>
                    </div>
                    <div className="login">
                        <span>Log In</span>
                    </div>
                    <div className="login-content">
                        <span>Enter your email and password below</span>
                    </div>
                </div>

                <div className="body-content">
                    <div className="email">
                        <span>Email</span>
                    </div>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="password">
                        <span>Password</span>
                    </div>
                    <div className="input-group flex-nowrap">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>

                <button className="btn-log-in" onClick={() => { this.handleOnClick() }}>
                    <span>Log In</span>
                </button>

                <div className="contact">
                    <span>Need help ? </span>
                    <span className="contact-content">Contact support</span>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);