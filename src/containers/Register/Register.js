import { Component } from "react";
import './Register.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Register extends Component {
    render() {
        return (
            <div className="register-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div>Đăng kí</div>
                </div>
            </div>
        )
    }
}

export default Register;