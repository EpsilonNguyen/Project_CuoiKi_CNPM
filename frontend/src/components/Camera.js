import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';

class Camera extends Component {
    render() {
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

                </div>
            </div>
        )
    }
}

export default Camera;