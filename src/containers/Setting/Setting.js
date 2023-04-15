import { Component } from "react";
import './Setting.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Setting extends Component {
    render() {
        return (
            <div className="setting-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div>Cài đặt</div>
                </div>
            </div>
        )
    }
}

export default Setting;