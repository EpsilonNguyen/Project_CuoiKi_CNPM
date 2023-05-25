import { Component } from "react";
import { AiOutlineHome, AiOutlineCamera, AiOutlineUserAdd } from 'react-icons/ai';
import { BsPeople, BsBarChartFill } from 'react-icons/bs';
import { HiBellAlert } from 'react-icons/hi2';
import { TbChartAreaLine } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { label, handleOnClickLabel } = this.props;

        return (
            <div className="w-[220px] h-screen text-white">
                <div className="text-gray-500 font-bold text-center py-8">
                    Dashboard
                </div>
                <div onClick={() => { handleOnClickLabel("home") }}
                    className={label === "home" ? "flex gap-5 pl-8 py-3 cursor-pointer opacity-75 border-t-2 border-gray-500"
                        : "flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500 border-t-2 border-gray-500"}>
                    <AiOutlineHome size={20} />
                    <span>Trang chủ</span>
                </div>
                <div onClick={() => { handleOnClickLabel("camera") }}
                    className={label === "camera" ? "flex gap-5 pl-8 py-3 cursor-pointer opacity-75"
                        : "flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500"}>
                    <AiOutlineCamera size={20} />
                    <span>Quản lí Camera</span>
                </div>
                <div onClick={() => { handleOnClickLabel("alert") }}
                    className={label === "alert" ? "flex gap-5 pl-8 py-3 cursor-pointer opacity-75"
                        : "flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500"}>
                    <HiBellAlert size={20} />
                    <span>Cảnh báo</span>
                </div>
                <div onClick={() => { handleOnClickLabel("area") }}
                    className={label === "area" ? "flex gap-5 pl-8 py-3 cursor-pointer opacity-75 border-t-2 border-gray-500"
                        : "flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500 border-t-2 border-gray-500"}>
                    <TbChartAreaLine size={20} />
                    <span>Khu vực</span>
                </div>
                <div onClick={() => { handleOnClickLabel("chart") }}
                    className={label === "chart" ? "flex gap-5 pl-8 py-3 cursor-pointer opacity-75 border-t-2 border-gray-500"
                        : "flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500 border-t-2 border-gray-500"}>
                    <BsBarChartFill size={20} />
                    <span>Thống kê</span>
                </div>
                <div className="flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500">
                    <BsPeople size={20} />
                    <span>Liên hệ</span>
                </div>
                <div className="flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500">
                    <FiSettings size={20} />
                    <span>Cài đặt</span>
                </div>
                <div className="flex gap-5 pl-8 py-3 cursor-pointer hover:bg-gray-500">
                    <AiOutlineUserAdd size={20} />
                    <span>Đăng kí</span>
                </div>
            </div >
        )
    }
}

export default Menu;