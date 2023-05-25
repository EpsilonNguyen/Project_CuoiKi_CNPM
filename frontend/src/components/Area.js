import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import { TbChartAreaLine } from 'react-icons/tb';
import axios from '../page/axios';
import ModalArea from "./ModalArea";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArea: [],
            isOpenModal: false,
            area: {},
            action: ''
        }
    }

    componentDidMount = async () => {
        this.handleGetListArea();
    }

    handleGetListArea = async () => {
        let result = await axios.get("/api/get-list-area");

        if (result.errCode === 0) {
            this.setState({
                listArea: result.listArea
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

    handleAddArea = async () => {
        this.setState({
            action: 'ADD'
        });

        this.handleOpenModal();
    }

    handleAddNewArea = async (area) => {
        let result = await axios.post(`/api/add-new-area`, { area });

        if (result.errCode === 0) {
            toast.success("Add new area success!");
        } else {
            toast.error("Failed to add new area!")
        }

        this.handleCloseModal();
        this.handleGetListArea();
    }

    handleFindAreaByID = async (id) => {
        this.setState({
            action: 'EDIT'
        });

        this.handleOpenModal();
        let result = await axios.get(`/api/get-area-by-id?id=${id}`);

        if (result.errCode === 0) {
            this.setState({
                area: result.area
            })
        }
    }

    handleSaveArea = async (area) => {
        let result = await axios.put("/api/edit-area-by-id", { area });

        if (result.errCode === 0) {
            toast.success("Update area success!");
        } else {
            toast.error("Failed to update area!")
        }

        this.handleCloseModal();
        this.handleGetListArea();
    }

    handleDeleteArea = async (id) => {
        let result = await axios.delete(`/api/delete-area`, { data: { id } });

        if (result.errCode === 0) {
            toast.success("Delete area success!");
        } else {
            toast.error("Failed to detele area!")
        }

        this.handleGetListArea();
    }

    render() {
        const { listArea } = this.state;

        return (
            <>
                <ModalArea
                    action={this.state.action}
                    area={this.state.area}
                    isOpenModal={this.state.isOpenModal}
                    handleCloseModal={this.handleCloseModal}
                    handleSaveArea={this.handleSaveArea}
                    handleAddNewArea={this.handleAddNewArea}
                />
                <div className=" bg-gray-200">
                    <div className="text-black">
                        <div className="flex gap-3 w-[1330px] h-24 pt-8">
                            <div className="flex gap-3 ml-2">
                                <TbChartAreaLine size={25} />
                                <span className="font-bold text-xl">Quản lí Area</span>
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
                            <span className="font-bold ml-3">Area</span>
                            <div className="flex gap-8 text-[14px] ml-auto mr-24">
                                <button onClick={() => { this.handleAddArea() }}
                                    type="button" className="bg-teal-400 text-white rounded-xl px-2 py-1 hover:scale-110">
                                    Add Area
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="w-full">
                                <tr className="border-black">
                                    <th>ID</th>
                                    <th>Serial</th>
                                    <th>Profile</th>
                                    <th>Activate</th>
                                    <th>Action</th>
                                </tr>

                                {listArea && listArea.length > 0
                                    && listArea.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-t-2 border-gray-400 text-center">
                                                <td>{item.id}</td>
                                                <td>{item.serial}</td>
                                                <td>{item.profile}</td>
                                                {item.activate === 'Low' && <td className="text-gray-500 font-bold">{item.activate}</td>}
                                                {item.activate === 'Medium' && <td className="text-green-500 font-bold">{item.activate}</td>}
                                                {item.activate === 'High' && <td className="text-red-500 font-bold">{item.activate}</td>}
                                                <td>
                                                    <button onClick={() => { this.handleFindAreaByID(item.id) }}
                                                        type="button" className="bg-green-500 text-white rounded-xl px-2 py-1 hover:scale-110 mr-2">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => { this.handleDeleteArea(item.id) }}
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

export default Area;