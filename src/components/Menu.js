import { Component } from "react";
import './Menu.scss';

import { NavLink } from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="content-left">
                <div className="first-content">
                    <span>Dashboard</span>
                </div>
                <div className="second-content">
                    <ul class="list-group">
                        <li className="list-group-item active" aria-current="true">
                            <div className="topnav">
                                <i className="fa fa-home" aria-hidden="true"></i>
                                <NavLink to="/home" activeClassName="active" exact={true}>
                                    <span>Trang chủ</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-video-camera" aria-hidden="true"></i>
                                <NavLink to="/camera-manager" activeClassName="active" exact={true}>
                                    <span>Quản lí Camera</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-bell" aria-hidden="true"></i>
                                <NavLink to="/alert" activeClassName="active" exact={true}>
                                    <span>Cảnh báo</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-area-chart" aria-hidden="true"></i>
                                <NavLink to="/area" activeClassName="active" exact={true}>
                                    <span>Khu vực</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-line-chart" aria-hidden="true"></i>
                                <NavLink to="/statistic" activeClassName="active" exact={true}>
                                    <span>Thống kê</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <NavLink to="/contact" activeClassName="active" exact={true}>
                                    <span>Liên hệ</span>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="third-content mt-4">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-cog" aria-hidden="true"></i>
                                <NavLink to="/setting" activeClassName="active" exact={true}>
                                    <span>Cài đặt</span>
                                </NavLink>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div className="topnav">
                                <i class="fa fa-user-plus" aria-hidden="true"></i>
                                <NavLink to="/register" activeClassName="active" exact={true}>
                                    <span>Đăng kí</span>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default Menu;