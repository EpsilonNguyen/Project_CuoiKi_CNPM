import React from "react";
import { withRouter } from "react-router-dom";
import axios from "../axios"; // cho phep goi tu client den server nodejs

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleOnClick = async () => {
        let user = await axios.post("/api/login", { email: this.state.email, password: this.state.password });
        if (user.errCode === 0) {
            this.props.history.push('/home');
        }
    }

    handleOnChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="flex justify-center">
                <div className="bg-white mt-40 w-[300px] rounded-md">
                    <div className="flex flex-col gap-5 px-5 pt-5 pb-12">
                        <div className="text-3xl uppercase text-center">
                            Logo
                        </div>
                        <div className="flex flex-col text-center">
                            <span className="text-gray-400">Camera Dashboard</span>
                            <span className="font-bold">Log In</span>
                            <span className="text-sm text-gray-400">Enter your email and password below</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase">Email</label>
                            <input type="text" placeholder="Email address" className="bg-blue-100 py-2 px-3 rounded-md"
                                value={email} onChange={(event) => { this.handleOnChangeEmail(event) }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-[10px] flex">
                                <label className="uppercase">Password</label>
                                <span className="ml-auto cursor-pointer">Forgot password?</span>
                            </div>
                            <input type="password" placeholder="Password" className="bg-blue-100 py-2 px-3 rounded-md"
                                value={password} onChange={(event) => { this.handleOnChangePassword(event) }} />
                        </div>
                        <button onClick={() => { this.handleOnClick() }}
                            type="button" className="text-white text-center bg-blue-500 rounded-md p-2 cursor-pointer">
                            Log In
                        </button>
                        <div className="text-[12px]">
                            Need help?
                            <span className="text-blue-400 ml-2 cursor-pointer">Contact support</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);