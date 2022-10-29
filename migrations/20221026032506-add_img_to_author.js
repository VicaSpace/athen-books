'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.addColumn('Books', 'name', {
                    type: Sequelize.STRING,
                    defaultValue: ''
                }, { transaction: t }),
                queryInterface.addColumn('Books', 'price', {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
                }, { transaction: t }),
                queryInterface.addColumn('Books', 'description', {
                    type: Sequelize.STRING,
                    defaultValue: 'This is a Book'
                }, { transaction: t }),
                queryInterface.addColumn('Authors', 'img', {
                    type: Sequelize.STRING,
                    defaultValue: ''
                }, { transaction: t })
            ])
        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.removeColumn('Books', 'name', { transaction: t }),
            ])
        })
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.removeColumn('Books', 'price', { transaction: t }),
            ])
        })
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.removeColumn('Books', 'description', { transaction: t }),
            ])
        })
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.removeColumn('Authors', 'img', { transaction: t }),
            ])
        })
    }
}
