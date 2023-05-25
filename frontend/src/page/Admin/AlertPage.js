import { Component } from "react";
import Menu from "../../components/Menu";
import AddAlert from "../../components/AddAlert";

class AlertPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'alert'
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
                <AddAlert />
            </div>
        )
    }
}

export default AlertPage;