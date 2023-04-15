import { Component } from "react";
import './Statistic.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Statistic extends Component {
    render() {
        return (
            <div className="statistic-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="body-content">Statistic Page</div>
                </div>
            </div>
        )
    }
}

export default Statistic;