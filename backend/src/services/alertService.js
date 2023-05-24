import db from "../models/index";

let handleGetListAlert = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.Alert.findAll({
                attributes: ['id', 'serial', 'message', 'id_area', 'level'],
                include: [
                    { model: db.Area, as: 'AreaData', attributes: ['serial'] },
                ],
                raw: true,
                nest: true
            });

            if (result) {
                resolve({
                    errCode: 0,
                    list: result
                })
            }

            resolve({ errCode: 3 });
        } catch (error) {
            reject(error)
        }
    })
}

let handleGetAlertByID = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let result = await db.Alert.findOne({
                    where: {
                        id: inputId
                    },
                    raw: true
                });

                if (result) {
                    resolve({
                        errCode: 0,
                        alert: result
                    });
                }

                resolve({
                    errCode: 3,
                });
            }

            resolve({
                errCode: 4
            });
        } catch (error) {
            reject(error)
        }
    })
}

let handleEditAlertByID = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Alert.update({
                    message: data.message,
                    id_area: data.id_area,
                    serial: data.serial,
                    level: data.level
                }, {
                    where: {
                        id: data.id
                    },
                    raw: true
                });

                resolve({
                    errCode: 0,
                });
            }

            resolve({
                errCode: 3
            });
        } catch (error) {
            reject(error)
        }
    })
}

let handleDeleteAlert = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let res = await db.Alert.destroy({
                    where:
                        { id: inputId },
                    raw: true
                });

                if (res) {
                    resolve({
                        errCode: 0
                    })
                }
            }

            resolve({
                errCode: 3
            });
        } catch (error) {
            reject(error)
        }
    })
}

let handleAddNewAlert = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Alert.create({
                    name: 'Cảnh báo 2',
                    serial: data.serial,
                    message: data.message,
                    id_area: data.id_area,
                    id_camera: 1,
                    level: data.level,
                });

                resolve({
                    errCode: 0,
                });
            }

            resolve({
                errCode: 3
            });
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleGetListAlert: handleGetListAlert,
    handleGetAlertByID: handleGetAlertByID,
    handleEditAlertByID: handleEditAlertByID,
    handleDeleteAlert: handleDeleteAlert,
    handleAddNewAlert: handleAddNewAlert,
}