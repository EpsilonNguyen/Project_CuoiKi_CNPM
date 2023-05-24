import alertService from '../services/alertService';

let handleGetListAlert = async (req, res) => {
    try {
        let result = await alertService.handleGetListAlert();

        if (result) {
            return res.status(200).json({
                errCode: result.errCode,
                listAlert: result.list ? result.list : []
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

let handleGetAlertByID = async (req, res) => {
    try {
        let result = await alertService.handleGetAlertByID(req.query.id);

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

let handleEditAlertByID = async (req, res) => {
    try {
        let result = await alertService.handleEditAlertByID(req.body.alert);

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

let handleDeleteAlert = async (req, res) => {
    try {
        let result = await alertService.handleDeleteAlert(req.body.id);

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

let handleAddNewAlert = async (req, res) => {
    try {
        let result = await alertService.handleAddNewAlert(req.body.alert);

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
    handleGetListAlert: handleGetListAlert,
    handleGetAlertByID: handleGetAlertByID,
    handleEditAlertByID: handleEditAlertByID,
    handleDeleteAlert: handleDeleteAlert,
    handleAddNewAlert: handleAddNewAlert
}