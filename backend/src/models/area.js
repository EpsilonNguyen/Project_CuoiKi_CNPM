'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Area extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Area.hasMany(models.Alert, { foreignKey: 'id_area', as: 'AlertData' });
            Area.hasMany(models.Camera, { foreignKey: 'id_area', as: 'CameraData' });

            Area.belongsTo(models.Satistic, { foreignKey: 'id_satistic', targetKey: 'id', as: 'AreaData' });
        }
    }
    Area.init({
        id_satistic: DataTypes.INTEGER,
        profile: DataTypes.STRING,
        serial: DataTypes.STRING,
        activate: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Area',
    });
    return Area;
};