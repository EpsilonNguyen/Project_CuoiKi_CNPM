import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import { HiBellAlert } from 'react-icons/hi2';
import axios from '../page/axios';
import ModalAlert from "./ModalAlert";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter } from "react-router-dom";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAlert: [],
            isOpenModal: false,
            alert: {},
            action: ''
        }
    }

    componentDidMount = async () => {
        this.handleGetListAlert();
    }

    handleGetListAlert = async () => {
        let result = await axios.get("/api/get-list-alert");

        if (result.errCode === 0) {
            this.setState({
                listAlert: result.listAlert
            })
        }
    }

    handleOpenModal = () => {
        this.setState({
            isOpenModal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false
        })
    }

    handleAddAlert = async () => {
        // this.setState({
        //     action: 'ADD'
        // });

        // this.handleOpenModal();
        this.props.history.push('/add-alert');
    }

    handleAddNewAlert = async (alert) => {
        let result = await axios.post(`/api/add-new-alert`, { alert });

        if (result.errCode === 0) {
            toast.success("Add new alert success!");
        } else {
            toast.error("Failed to add new alert!")
        }

        this.handleCloseModal();
        this.handleGetListAlert();
    }

    handleFindAlertByID = async (id) => {
        this.setState({
            action: 'EDIT'
        });

        this.handleOpenModal();
        let result = await axios.get(`/api/get-alert-by-id?id=${id}`);

        if (result.errCode === 0) {
            this.setState({
                alert: result.alert
            })
        }
    }

    handleSaveAlert = async (alert) => {
        let result = await axios.put("/api/edit-alert-by-id", { alert });

        if (result.errCode === 0) {
            toast.success("Update alert success!");
        } else {
            toast.error("Failed to update alert!")
        }

        this.handleCloseModal();
        this.handleGetListAlert();
    }

    handleDeleteAlert = async (id) => {
        let result = await axios.delete(`/api/delete-alert`, { data: { id } });

        if (result.errCode === 0) {
            toast.success("Delete alert success!");
        } else {
            toast.error("Failed to delete alert!")
        }

        this.handleGetListAlert();
    }

    render() {
        const { listAlert } = this.state;

        return (
            <>
                <ModalAlert
                    action={this.state.action}
                    alert={this.state.alert}
                    isOpenModal={this.state.isOpenModal}
                    handleCloseModal={this.handleCloseModal}
                    handleSaveAlert={this.handleSaveAlert}
                    handleAddNewAlert={this.handleAddNewAlert}
                />
                <div className=" bg-gray-200">
                    <div className="text-black">
                        <div className="flex gap-3 w-[1330px] h-24 pt-8">
                            <div className="flex gap-3 ml-2">
                                <HiBellAlert size={25} />
                                <span className="font-bold text-xl">Cảnh báo</span>
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
                            <span className="font-bold ml-3">Lịch sử cảnh báo</span>
                            <div className="flex gap-8 text-[14px] ml-auto mr-24">
                                <button onClick={() => { this.handleAddAlert() }}
                                    type="button" className="bg-teal-400 text-white rounded-xl px-2 py-1 hover:scale-110">
                                    Add Alert
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="w-full">
                                <tr className="border-black">
                                    <th>Nội dung</th>
                                    <th>Khu vực</th>
                                    <th>Serial</th>
                                    <th>Mức độ</th>
                                    <th>Action</th>
                                </tr>

                                {listAlert && listAlert.length > 0
                                    && listAlert.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-t-2 border-gray-400 text-center">
                                                <td>{item.message}</td>
                                                {/* <td>{item.AreaData.serial}</td> */}
                                                <td>{item.id_area}</td>
                                                <td>{item.serial}</td>
                                                {item.level === 'Low' && <td className="text-gray-500 font-bold">{item.level}</td>}
                                                {item.level === 'Medium' && <td className="text-green-500 font-bold">{item.level}</td>}
                                                {item.level === 'High' && <td className="text-red-500 font-bold">{item.level}</td>}
                                                <td>
                                                    <button onClick={() => { this.handleFindAlertByID(item.id) }}
                                                        type="button" className="bg-green-500 text-white rounded-xl px-2 py-1 hover:scale-110 mr-2">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => { this.handleDeleteAlert(item.id) }}
                                                        type="button" className="bg-red-500 text-white rounded-xl px-2 py-1 hover:scale-110">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Alert);