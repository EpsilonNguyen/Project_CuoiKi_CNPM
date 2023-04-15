import { Component } from "react";
import './Area.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Area extends Component {
    render() {
        return (
            <div className="area-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="body-content">Area Page</div>
                </div>
            </div>
        )
    }
}

export default Area;