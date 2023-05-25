import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import Camera from '../images/camera_giam_sat.jpg';
import axios from '../page/axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount = async () => {
        // const result = await axios.get('/api/get-count-alert');
        const result = await axios.get('/api/get-count-camera');

        if (result.errCode === 0) {
            this.setState({
                count: result.count
            })
        }
    }

    render() {
        return (
            <div className=" bg-gray-200">
                <div className="text-black">
                    <div className="flex gap-3 w-[1330px] h-24 pt-8">
                        <div className="flex gap-3 ml-2">
                            <AiOutlineHome size={25} />
                            <span className="font-bold text-xl">Trang chủ</span>
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
                <div className="bg-white h-[700px] mx-8">
                    <div className="flex justify-center gap-8">
                        <div className="text-center pt-5 font-bold border-2 border-black h-32 w-56 rounded-xl">
                            <div className=" text-[24px]">Tổng Camera</div>
                            <div className=" text-[40px]">{this.state.count}</div>
                        </div>
                        <div className="text-center pt-5 font-bold border-2 border-black h-32 w-56 rounded-xl">
                            <div className=" text-[24px]">Tổng số Profile</div>
                            <div className=" text-[40px]">8</div>
                        </div>
                    </div>
                    <div className="flex gap-8 justify-center mt-5">
                        <img src={Camera} alt='camera' className="h-[250px] cursor-pointer hover:scale-110 transition" />
                        <img src={Camera} alt='camera' className="h-[250px] cursor-pointer hover:scale-110 transition" />
                    </div>
                    <div className="flex gap-8 justify-center mt-5">
                        <img src={Camera} alt='camera' className="h-[250px] cursor-pointer hover:scale-110 transition" />
                        <img src={Camera} alt='camera' className="h-[250px] cursor-pointer hover:scale-110 transition" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;