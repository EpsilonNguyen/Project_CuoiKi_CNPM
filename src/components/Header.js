import { Component } from "react";
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <div className="first-content">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span>Trang chủ</span>
                </div>
                <div className="second-content">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="bell fa fa-bell-o" aria-hidden="true"></i>
                </div>
                <div className="third-content">
                    <span>Admin</span>
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default Header;