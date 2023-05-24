import cameraService from '../services/cameraService';

let handleGetListCamera = async (req, res) => {
    try {
        let result = await cameraService.handleGetListCamera();

        if (result) {
            return res.status(200).json({
                errCode: result.errCode,
                errMessage: result.errMessage,
                listCamera: result.list ? result.list : []
            })
        }

        return res.status(500).json({
            errCode: 2,
            errMessage: 'No data!'
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Error from server!'
        })
    }
}

let handleGetCameraByID = async (req, res) => {
    try {
        let result = await cameraService.handleGetCameraByID(req.query.id);

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(500).json({
            errCode: 2,
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 2,
        })
    }
}

let handleEditCameraByID = async (req, res) => {
    try {
        let result = await cameraService.handleEditCameraByID(req.body.camera);

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(500).json({
            errCode: 2,
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 1,
        })
    }
}

let handleDeleteCamera = async (req, res) => {
    try {
        let result = await cameraService.handleDeleteCamera(req.body.id);

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(500).json({
            errCode: 2,
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 1,
        })
    }
}

let handleAddNewCamera = async (req, res) => {
    try {
        let result = await cameraService.handleAddNewCamera(req.body.camera);

        if (result) {
            return res.status(200).json(result)
        }

        return res.status(500).json({
            errCode: 2,
        })

    } catch (error) {
        return res.status(500).json({
            errCode: 1,
        })
    }
}

module.exports = {
    handleGetListCamera: handleGetListCamera,
    handleGetCameraByID: handleGetCameraByID,
    handleEditCameraByID: handleEditCameraByID,
    handleDeleteCamera: handleDeleteCamera,
    handleAddNewCamera: handleAddNewCamera
}