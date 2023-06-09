'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Camera extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Camera.hasMany(models.Alert, { foreignKey: 'id_camera', as: 'CameraData' });

            Camera.belongsTo(models.Area, { foreignKey: 'id_area', targetKey: 'id', as: 'AreaData' });
        }
    }
    Camera.init({
        serial: DataTypes.STRING,
        id_area: DataTypes.INTEGER,
        homeID: DataTypes.STRING,
        connection: DataTypes.STRING,
        securityLevel: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Camera',
    });
    return Camera;
};