'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.addColumn('Books', 'img', {
                    type: Sequelize.STRING
                }, { transaction: t })
            ])
        })
    },

    async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
        await queryInterface.sequelize.transaction(async (t) => {
            await Promise.all([
                queryInterface.removeColumn('Books', 'img', { transaction: t }),
            ])
        })
    }
}
