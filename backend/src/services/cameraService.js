import db from "../models/index";

let handleGetListCamera = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listCamera = {};

            let result = await db.Camera.findAll({
                attributes: ['id', 'serial', 'homeID', 'connection', 'securityLevel'],
                raw: true
            });

            if (result) {
                listCamera.errCode = 0;
                listCamera.errMessage = "Succeed!";
                listCamera.list = result;
            }

            resolve(listCamera);
        } catch (error) {
            reject(error)
        }
    })
}

let handleGetCameraByID = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let result = await db.Camera.findOne({
                    where: {
                        id: inputId
                    },
                    raw: true
                });

                if (result) {
                    resolve({
                        errCode: 0,
                        camera: result
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

let handleEditCameraByID = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Camera.update({
                    serial: data.serial,
                    homeID: data.homeID,
                    connection: data.connecting,
                    securityLevel: data.securityLevel
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

let handleDeleteCamera = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let res = await db.Camera.destroy({
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

let handleAddNewCamera = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Camera.create({
                    serial: data.serial,
                    homeID: data.homeID,
                    id_area: 1,
                    connection: data.connecting,
                    securityLevel: data.securityLevel,
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
    handleGetListCamera: handleGetListCamera,
    handleGetCameraByID: handleGetCameraByID,
    handleEditCameraByID: handleEditCameraByID,
    handleDeleteCamera: handleDeleteCamera,
    handleAddNewCamera: handleAddNewCamera,
}