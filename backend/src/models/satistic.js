'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Satistic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Satistic.hasMany(models.Area, { foreignKey: 'id_satistic', as: 'SatisticData' });
        }
    }
    Satistic.init({
        profile: DataTypes.STRING,
        area: DataTypes.STRING,
        serial: DataTypes.STRING,
        time: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Satistic',
    });
    return Satistic;
};