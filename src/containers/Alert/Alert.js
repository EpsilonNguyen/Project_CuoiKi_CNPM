import { Component } from "react";
import './Alert.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Alert extends Component {
    render() {
        return (
            <div className="alert-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div>Halo</div>
                </div>
            </div>
        )
    }
}

export default Alert;