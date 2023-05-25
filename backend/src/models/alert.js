'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Alert extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Alert.belongsTo(models.Area, { foreignKey: 'id_area', targetKey: 'id', as: 'AreaData' });
            Alert.belongsTo(models.Camera, { foreignKey: 'id_camera', targetKey: 'id', as: 'CameraData' });
        }
    }
    Alert.init({
        name: DataTypes.STRING,
        message: DataTypes.STRING,
        id_area: DataTypes.INTEGER,
        id_camera: DataTypes.INTEGER,
        serial: DataTypes.STRING,
        level: DataTypes.STRING,
        playback: DataTypes.STRING,
        image: DataTypes.STRING,
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Alert',
    });
    return Alert;
};