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
                    <div className="body-content">
                        <div className="first-row pt-3">
                            <div className="first-content">Home</div>
                            <div className="second-content">
                                <div className="sort"> <i class="fa fa-sort-amount-asc" aria-hidden="true"></i><span>Sort</span></div>
                                <div className="filter"><i class="fa fa-filter" aria-hidden="true"></i><span>Filter</span></div>
                            </div>
                        </div>
                        <div className="second-row mt-5">
                            <div className="first-content">
                                <div><i class="fa fa-square-o" aria-hidden="true"></i></div>
                                <div><span>ID</span></div>
                            </div>
                            <div className="second-content">
                                <div><span>Serial</span></div>
                                <div><span>Profile</span></div>
                                <div><span>Activate</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Area;