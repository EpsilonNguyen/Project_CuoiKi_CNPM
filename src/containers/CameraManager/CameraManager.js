import { Component } from "react";
import './CameraManager.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class CameraManager extends Component {
    render() {
        return (
            <div className="cam-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div>Halo</div>
                </div>
            </div>
        )
    }
}

export default CameraManager;