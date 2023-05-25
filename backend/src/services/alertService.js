import db from "../models/index";
import moment from 'moment';

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
                    name: data.name,
                    serial: data.serial,
                    message: data.message,
                    id_area: data.id_area,
                    id_camera: data.id_camera,
                    level: data.level,
                    startTime: data.startTime,
                    endTime: data.endTime,
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

let handleGetCountAlert = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {
                id_area: 1,
                month: [1, 2, 3, 4, 5]
            }

            let count = [];

            let result = await db.Alert.findAll({
                where: {
                    id_area: data.id_area,
                },
                raw: true
            });

            let formatresult = result.map((item) => {
                if (item.updatedAt) {
                    item.updatedAt = moment(item.updatedAt).month() + 1;
                }
                return (item);
            })

            formatresult.map((item) => {
                if (item.updatedAt === data.month) {
                    count += 1;
                }
            })

            console.log(">>> check count: ", count);

            // let result = await db.Alert.count();

            if (result) {
                resolve({
                    errCode: 0,
                    count: result
                });
            }

            resolve({
                errCode: 3,
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
    handleGetCountAlert: handleGetCountAlert
}