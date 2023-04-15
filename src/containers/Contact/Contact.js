import { Component } from "react";
import './Contact.scss';
import Menu from "../../components/Menu";
import Header from "../../components/Header";

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <Menu />
                <div className="content-right">
                    <Header />
                    <div className="body-content">Liên hệ</div>
                </div>
            </div>
        )
    }
}

export default Contact;