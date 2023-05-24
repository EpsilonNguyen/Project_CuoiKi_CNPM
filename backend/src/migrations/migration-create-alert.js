'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Alerts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            message: {
                type: Sequelize.STRING
            },
            id_area: {
                type: Sequelize.INTEGER
            },
            id_camera: {
                type: Sequelize.INTEGER
            },
            serial: {
                type: Sequelize.STRING
            },
            level: {
                type: Sequelize.STRING
            },
            playback: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            startTime: {
                type: Sequelize.DATE
            },
            endTime: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Alerts');
    }
};