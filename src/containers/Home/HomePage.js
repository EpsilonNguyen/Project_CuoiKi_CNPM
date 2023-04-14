import { Component } from "react";
import './HomePage.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class HomePage extends Component {
    render() {
        return (
            <div className="home-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="body-content">
                        <div className="first-content">
                            <div className="content-left">
                                <span className="text-content">Tổng Camera</span>
                                <span className="number">60</span>
                            </div>
                            <div className="content-right">
                                <span className="text-content">Tổng số Profile</span>
                                <span className="number">64</span>
                            </div>
                        </div>
                        <div className="second-content pt-3">
                            <div className="first-row">
                                <div className="content-left"></div>
                                <div className="content-right"></div>
                            </div>
                            <div className="second-row mt-3">
                                <div className="content-left"></div>
                                <div className="content-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;