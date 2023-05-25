import React from 'react';
import Modal from 'react-modal';
import { MdExitToApp } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';

class ModalCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            serial: '',
            homeID: '',
            connecting: '',
            securityLevel: ''
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
        if (prevProps.camera !== this.props.camera) {
            let { camera } = this.props;
            this.setState({
                id: camera.id,
                serial: camera.serial,
                homeID: camera.homeID,
                connecting: camera.connection,
                securityLevel: camera.securityLevel
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

    handleSaveCamera = () => {
        const { action } = this.props;
        if (action === 'EDIT') {
            this.props.handleSaveCamera(this.state);
        }
        else if (action === 'ADD') {
            this.props.handleAddNewCamera(this.state);
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
                    {action === 'EDIT' ?
                        <input type='hidden' onChange={(event) => { this.handleOnChangeInput(event, 'id') }}
                            value={this.state.id} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        :
                        <></>
                    }
                    <div className='flex'>
                        <div className='text-teal-400 font-bold text-2xl'>
                            {action === 'EDIT' ? 'Edit Camera' : 'Add Camera'}
                        </div>
                        <div className='ml-auto'>
                            <button className='hover:scale-110 hover:text-red-500'
                                onClick={() => this.closeModal()}>
                                <MdExitToApp size={25} />
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col'>
                            <label>Serial</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'serial') }}
                                value={this.state.serial} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label>Home ID</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'homeID') }}
                                value={this.state.homeID} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col'>
                            <label>Connecting</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'connecting') }}
                                value={this.state.connecting} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                        <div className='flex flex-col'>
                            <label>Security Level</label>
                            <input type='text' onChange={(event) => { this.handleOnChangeInput(event, 'securityLevel') }}
                                value={this.state.securityLevel} className='border-2 border-black rounded-xl w-56 px-2 py-1' />
                        </div>
                    </div>
                    <div className='flex gap-2 justify-end'>
                        <button className='bg-green-500 text-white w-16 rounded-md cursor-pointer hover:scale-110 py-1'
                            onClick={() => this.handleSaveCamera()}>
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

export default ModalCamera;