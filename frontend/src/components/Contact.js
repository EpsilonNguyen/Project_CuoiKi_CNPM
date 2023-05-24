import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import axios from '../page/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import moment from 'moment';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
        }
    }

    componentDidMount = async () => {
    }

    handleOnChangeDateTime = (event) => {
        let formatDate = moment(event).format('YYYY-MM-DD');
    }

    render() {
        const { value } = this.state;

        return (
            <>
                <div className=" bg-gray-200">
                    <div className="text-black">
                        <div className="flex gap-3 w-[1330px] h-24 pt-8">
                            <div className="flex gap-3 ml-2">
                                <AiOutlineHome size={25} />
                                <span className="font-bold text-xl">Cài đặt cảnh báo</span>
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
                            <span className="font-bold ml-3">Cài đặt</span>
                        </div>
                        <div className="flex flex-col gap-8 mt-5 mx-8">
                            <div className="flex gap-3">
                                <label className="py-1">Tên cảnh báo</label>
                                <input className="border-2 border-black px-3 py-1 rounded-xl" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-gray-400 text-[18px] text-white font-bold px-2">Cảnh báo theo thời gian</div>
                                <div>Khung thời gian cảnh báo</div>
                                <div className="flex gap-5">
                                    <div className="flex gap-2">
                                        <label className="py-1">Từ</label>
                                        <DateTimePicker className="border-2 border-gray-400"
                                            onChange={(event) => { this.handleOnChangeDateTime(event) }} value={value} />
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="py-1">Đến</label>
                                        <DateTimePicker className="border-2 border-gray-400"
                                            onChange={(event) => { this.handleOnChangeDateTime(event) }} value={value} />
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="py-1">Mức độ cảnh báo</label>
                                        <select className="rounded-xl border-2 border-black">
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-gray-400 text-[18px] text-white font-bold px-2">Cảnh báo theo khuôn mặt</div>
                                <div>Chọn khuôn mặt được dùng để cảnh báo</div>
                                <input className="border-2 border-black w-56" type="file" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-gray-400 text-[18px] text-white font-bold px-2">Cảnh báo theo khu vực</div>
                                <div className="flex gap-2">
                                    <label className="py-1">Chọn khu vực để cảnh báo</label>
                                    <select className="rounded-xl border-2 border-black">
                                        <option value="1">Khu vực 1</option>
                                        <option value="2">Khu vực 2</option>
                                        <option value="3">Khu vực 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-8 mr-12">
                                <button onClick={() => { this.handleDeleteAlert() }}
                                    type="button" className="bg-red-500 text-white rounded-xl px-2 py-1 hover:scale-110">
                                    Cancel
                                </button>
                                <button onClick={() => { this.handleFindAlertByID() }}
                                    type="button" className="bg-green-500 text-white rounded-xl px-2 py-1 hover:scale-110 mr-2">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;