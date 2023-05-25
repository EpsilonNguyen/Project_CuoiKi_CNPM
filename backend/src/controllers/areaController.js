import areaService from '../services/areaService';

let handleGetListArea = async (req, res) => {
    try {
        let result = await areaService.handleGetListArea();

        if (result) {
            return res.status(200).json({
                errCode: result.errCode,
                listArea: result.list ? result.list : []
            })
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

let handleGetAreaByID = async (req, res) => {
    try {
        let result = await areaService.handleGetAreaByID(req.query.id);

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

let handleEditAreaByID = async (req, res) => {
    try {
        let result = await areaService.handleEditAreaByID(req.body.area);

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

let handleDeleteArea = async (req, res) => {
    try {
        let result = await areaService.handleDeleteArea(req.body.id);

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

let handleAddNewArea = async (req, res) => {
    try {
        let result = await areaService.handleAddNewArea(req.body.area);

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
    handleGetListArea: handleGetListArea,
    handleGetAreaByID: handleGetAreaByID,
    handleEditAreaByID: handleEditAreaByID,
    handleDeleteArea: handleDeleteArea,
    handleAddNewArea: handleAddNewArea
}