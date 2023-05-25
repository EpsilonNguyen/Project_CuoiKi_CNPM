import db from "../models/index";

let handleGetListArea = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.Area.findAll({
                attributes: ['id', 'serial', 'profile', 'activate'],
                raw: true,
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

let handleGetAreaByID = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let result = await db.Area.findOne({
                    where: {
                        id: inputId
                    },
                    raw: true
                });

                if (result) {
                    resolve({
                        errCode: 0,
                        area: result
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

let handleEditAreaByID = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Area.update({
                    profile: data.profile,
                    serial: data.serial,
                    activate: data.activate
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

let handleDeleteArea = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (inputId) {
                let res = await db.Area.destroy({
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

let handleAddNewArea = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data) {
                await db.Area.create({
                    id_satistic: 1,
                    profile: data.profile,
                    serial: data.serial,
                    activate: data.activate
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
    handleGetListArea: handleGetListArea,
    handleGetAreaByID: handleGetAreaByID,
    handleEditAreaByID: handleEditAreaByID,
    handleDeleteArea: handleDeleteArea,
    handleAddNewArea: handleAddNewArea,
}