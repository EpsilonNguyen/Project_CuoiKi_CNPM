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
                    <div className="body-content">
                        <div className="first-row pt-3">
                            <div className="first-content">Camera</div>
                            <div className="second-content">
                                <div className="sort"> <i class="fa fa-sort-amount-asc" aria-hidden="true"></i><span>Sort</span></div>
                                <div className="filter"><i class="fa fa-filter" aria-hidden="true"></i><span>Filter</span></div>
                            </div>
                        </div>
                        <div className="second-row mt-5">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>Serial</span></div>
                            </div>
                            <div className="second-content">
                                <div><span>Home ID</span></div>
                                <div><span>Connection</span></div>
                                <div><span>Security Level</span></div>
                            </div>
                        </div>
                        <div className="third-row mt-3">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>ABC123-456789</span></div>
                            </div>
                            <div className="second-content">
                                <div className="sort"><span>H56213454</span></div>
                                <div className="sort"><span>Connecting</span></div>
                                <div className="sort"><span>High</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CameraManager;