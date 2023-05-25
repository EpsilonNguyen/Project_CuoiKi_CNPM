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
import moment, { defaultFormat } from 'moment';
import { withRouter } from "react-router-dom";

class AddAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            level: '',
            startTime: new Date(),
            endTime: new Date(),
            id_area: 1,
        }
    }

    componentDidMount = async () => {
    }

    handleOnChangeStartTime = (event) => {
        moment.defaultFormat = "DD/MM/YYYY h:mm";
        let formatDate = moment(event).format('DD/MM/YYYY h:mm');
        this.setState({
            startTime: moment(formatDate, defaultFormat).toDate(),
        })
    }

    handleOnChangeEndTime = (event) => {
        moment.defaultFormat = "DD/MM/YYYY h:mm";
        let formatDate = moment(event).format('DD/MM/YYYY h:mm');
        this.setState({
            endTime: moment(formatDate, defaultFormat).toDate(),
        })
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeLevel = (event) => {
        this.setState({
            level: event.target.options[event.target.selectedIndex].value,
        })
    }

    handleOnChangeArea = (event) => {
        this.setState({
            id_area: +event.target.options[event.target.selectedIndex].value,
        })
    }

    handleSaveAlert = async () => {
        const { startTime, endTime } = this.state;

        const data = {
            name: this.state.name,
            message: 'Cảnh báo người lạ',
            id_area: this.state.id_area,
            id_camera: 1,
            serial: 'SerialAlert',
            level: this.state.level,
            startTime: moment(startTime).format('DD/MM/YYYY'),
            endTime: moment(endTime).format('DD/MM/YYYY'),
        }
        let result = await axios.post(`/api/add-new-alert`, { data });

        if (result.errCode === 0) {
            toast.success("Add new alert success!");
        } else {
            toast.error("Failed to add new alert!")
        }

        this.props.history.push('/home');
    }

    handleCancel = () => {
        this.props.history.push('/home');
    }

    render() {
        const { startTime, endTime } = this.state;

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
                                <input onChange={(event) => { this.handleOnChangeName(event) }}
                                    value={this.state.name} className="border-2 border-black px-3 py-1 rounded-xl" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="bg-gray-400 text-[18px] text-white font-bold px-2">Cảnh báo theo thời gian</div>
                                <div>Khung thời gian cảnh báo</div>
                                <div className="flex gap-5">
                                    <div className="flex gap-2">
                                        <label className="py-1">Từ</label>
                                        <DateTimePicker className="border-2 border-gray-400"
                                            onChange={(event) => { this.handleOnChangeStartTime(event) }} value={startTime} />
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="py-1">Đến</label>
                                        <DateTimePicker className="border-2 border-gray-400"
                                            onChange={(event) => { this.handleOnChangeEndTime(event) }} value={endTime} />
                                    </div>
                                    <div className="flex gap-2">
                                        <label className="py-1">Mức độ cảnh báo</label>
                                        <select onChange={(event) => { this.handleOnChangeLevel(event) }} className="rounded-xl border-2 border-black">
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
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
                                    <select onChange={(event) => { this.handleOnChangeArea(event) }} className="rounded-xl border-2 border-black">
                                        <option value="1">Khu vực 1</option>
                                        <option value="2">Khu vực 2</option>
                                        <option value="3">Khu vực 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-8 mr-12">
                                <button onClick={() => { this.handleCancel() }}
                                    type="button" className="bg-red-500 text-white rounded-xl px-2 py-1 hover:scale-110">
                                    Cancel
                                </button>
                                <button onClick={() => { this.handleSaveAlert() }}
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

export default withRouter(AddAlert);