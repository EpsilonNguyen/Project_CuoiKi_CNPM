import { Component } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import axios from '../page/axios';
import ModalCamera from "./ModalCamera";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCamera: [],
            isOpenModal: false,
            camera: {},
            action: ''
        }
    }

    componentDidMount = async () => {
        this.handleGetListCamera();
    }

    handleGetListCamera = async () => {
        let result = await axios.get("/api/get-list-camera");

        if (result.errCode === 0) {
            this.setState({
                listCamera: result.listCamera
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

    handleAddCamera = async () => {
        this.setState({
            action: 'ADD'
        });

        this.handleOpenModal();
    }

    handleAddNewCamera = async (camera) => {
        let result = await axios.post(`/api/add-new-camera`, { camera });

        if (result.errCode === 0) {
            toast.success("Add new product success!");
        } else {
            toast.error("Failed to add new product!")
        }

        this.handleCloseModal();
        this.handleGetListCamera();
    }

    handleFindCameraByID = async (id) => {
        this.setState({
            action: 'EDIT'
        });

        this.handleOpenModal();
        let result = await axios.get(`/api/get-camera-by-id?id=${id}`);

        if (result.errCode === 0) {
            this.setState({
                camera: result.camera
            })
        }
    }

    handleSaveCamera = async (camera) => {
        let result = await axios.put("/api/edit-camera-by-id", { camera });

        if (result.errCode === 0) {
            toast.success("Update camera success!");
        } else {
            toast.error("Failed to update camera!")
        }

        this.handleCloseModal();
        this.handleGetListCamera();
    }

    handleDeleteCamera = async (id) => {
        let result = await axios.delete(`/api/delete-camera`, { data: { id } });

        if (result.errCode === 0) {
            toast.success("Delete camera success!");
        } else {
            toast.error("Failed to detele camera!")
        }

        this.handleGetListCamera();
    }

    render() {
        const { listCamera } = this.state;

        return (
            <>
                <ModalCamera
                    action={this.state.action}
                    camera={this.state.camera}
                    isOpenModal={this.state.isOpenModal}
                    handleCloseModal={this.handleCloseModal}
                    handleSaveCamera={this.handleSaveCamera}
                    handleAddNewCamera={this.handleAddNewCamera}
                />
                <div className=" bg-gray-200">
                    <div className="text-black">
                        <div className="flex gap-3 w-[1330px] h-24 pt-8">
                            <div className="flex gap-3 ml-2">
                                <AiOutlineCamera size={25} />
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
                            <div className="flex gap-8 text-[14px] ml-auto mr-24">
                                <button onClick={() => { this.handleAddCamera() }}
                                    type="button" className="bg-teal-400 text-white rounded-xl px-2 py-1 hover:scale-110">
                                    Add Camera
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="w-full">
                                <tr className="border-black">
                                    <th>Serial</th>
                                    <th>Home ID</th>
                                    <th>Connection</th>
                                    <th>Security Level</th>
                                    <th>Action</th>
                                </tr>

                                {listCamera && listCamera.length > 0
                                    && listCamera.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-t-2 border-gray-400 text-center">
                                                <td>{item.serial}</td>
                                                <td>{item.homeID}</td>
                                                {item.connection === 'Connecting' ?
                                                    <td className="text-green-500 font-bold">{item.connection}</td>
                                                    :
                                                    <td className="text-red-500 font-bold">{item.connection}</td>
                                                }
                                                {item.securityLevel === 'Low' && <td className="text-gray-500 font-bold">{item.securityLevel}</td>}
                                                {item.securityLevel === 'Medium' && <td className="text-green-500 font-bold">{item.securityLevel}</td>}
                                                {item.securityLevel === 'High' && <td className="text-red-500 font-bold">{item.securityLevel}</td>}
                                                <td>
                                                    <button onClick={() => { this.handleFindCameraByID(item.id) }}
                                                        type="button" className="bg-green-500 text-white rounded-xl px-2 py-1 hover:scale-110 mr-2">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => { this.handleDeleteCamera(item.id) }}
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

export default Camera;