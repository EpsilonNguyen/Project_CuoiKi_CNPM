import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import axios from '../page/axios';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCamera: []
        }
    }

    componentDidMount = async () => {
        let result = await axios.get("/api/camera-manager");

        console.log(">>> check res: ", result);
        if (result.errCode === 0) {
            this.setState({
                listCamera: result.listCamera
            })
        }
    }

    render() {
        const { listCamera } = this.state;

        return (
            <div className=" bg-gray-200">
                <div className="text-black">
                    <div className="flex gap-3 w-[1330px] h-24 pt-8">
                        <div className="flex gap-3 ml-2">
                            <AiOutlineHome size={25} />
                            <span className="font-bold text-xl">Quản lí Camera</span>
                        </div>
                        <div className="flex gap-8 ml-auto mr-8">
                            <div className="flex gap-3">
                                <AiOutlineSearch size={20} />
                                <BiBell size={20} />
                            </div>
                            <div className="flex gap-3">
                                <span>Admin</span>
                                <div className="w-10 h-10 rounded-full border-red-500 border-2 -translate-y-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[600px] mx-8">
                    <div className="flex pt-5">
                        <span className="font-bold ml-3">Camera</span>
                        <div className="flex gap-8 text-[14px] ml-auto mr-5">
                            <span>Sort</span>
                            <span>Filter</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <table className="w-full">
                            <tr className="border-black">
                                <th>Serial</th>
                                <th>Home ID</th>
                                <th>Connection</th>
                                <th>Security Level</th>
                            </tr>

                            {listCamera && listCamera.length > 0
                                && listCamera.map((item, index) => {
                                    return (
                                        <tr key={index} className="border-t-2 border-gray-400 text-center">
                                            <td>{item.serial}</td>
                                            <td>{item.homeID}</td>
                                            <td>{item.connection}</td>
                                            <td>{item.securityLevel}</td>
                                        </tr>
                                    )
                                })}

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Camera;