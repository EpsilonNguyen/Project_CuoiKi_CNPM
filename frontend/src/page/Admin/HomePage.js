import { Component } from "react";
import Menu from "../../components/Menu";
import Home from "../../components/Home";
import Camera from "../../components/Camera";
import Alert from "../../components/Alert";
import Contact from "../../components/Contact";
import Area from "../../components/Area";
import ChartAlert from "../../components/ChartAlert";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'home'
        }
    }

    handleOnClickLabel = (input) => {
        this.setState({
            label: input
        })
    }

    render() {
        const { label } = this.state;

        return (
            <div className="flex">
                <Menu
                    label={this.state.label}
                    handleOnClickLabel={this.handleOnClickLabel}
                />
                {label === 'home' && <Home />}
                {label === 'camera' && <Camera />}
                {label === 'alert' && <Alert />}
                {label === 'area' && <Area />}
                {label === 'contact' && <Contact />}
                {label === 'chart' && <ChartAlert />}
            </div>
        )
    }
}

export default HomePage;