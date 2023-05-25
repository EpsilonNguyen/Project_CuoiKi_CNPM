import React from 'react';
import Modal from 'react-modal';
import { MdExitToApp } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';

class ModalArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            serial: '',
            profile: '',
            activate: '',
        }
    }

    customStyles = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.area !== this.props.area) {
            let { area } = this.props;
            this.setState({
                id: area.id,
                serial: area.serial,
                profile: area.profile,
                activate: area.activate,
            })
        }
    }

    handleOnChangeInput = (event, name) => {
        let copyState = { ...this.state };
        copyState[name] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleSaveArea = () => {
        const { action } = this.props;
        if (action === 'EDIT') {
            this.props.handleSaveArea(this.state);
        }
        else if (action === 'ADD') {
            this.props.handleAddNewArea(this.state);
        }
    }

    closeModal = () => {
        this.props.handleCloseModal();
    }

    render() {
        let { isOpenModal, action } = this.props;

        return (
            <Modal
                isOpen={isOpenModal}
                style={this.customStyles}
            >
                <div className='flex flex-col gap-4'>
                    <div className='flex'>
                        <div className='text-teal-400 font-bold text-2xl'>
                            {action === 'EDIT' ? 'Edit Area' : 'Add Area'}
                        </div>
                        <div className='ml-auto'>
                            <button className='hover:scale-110 hover:text-red-500'
                                onClick={() => this.closeModal()}>
                                <MdExitToApp size={25} />
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        {action === 'EDIT' ?
                            <div className='flex flex-col'>
                                <label>ID</label>
                                <input type='text' value={this.state.id} disabled
                                    className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                            </div>
                            :
                            <></>
                        }
                        <div className='flex flex-col'>
                            <label>Serial</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'serial') }}
                                value={this.state.serial} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col'>
                            <label>Profile</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'profile') }}
                                value={this.state.profile} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label>Activate</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'activate') }}
                                value={this.state.activate} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <button className='bg-green-500 text-white w-16 rounded-md cursor-pointer hover:scale-110 py-1'
                            onClick={() => this.handleSaveArea()}>
                            {action === 'EDIT' ? 'Save' : 'Add'}
                        </button>
                        <button className='bg-red-500 text-white w-16 rounded-md cursor-pointer hover:scale-110 py-1'
                            onClick={() => this.closeModal()}>Cancel</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalArea;