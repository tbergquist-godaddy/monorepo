// @flow

module.exports = {
  up: (queryInterface /* :Object */, Sequelize /* :Object */) /* :Promise<void> */ => {
    return queryInterface.createTable('exercises', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface /* :Object */) /* :Promise<void> */ => {
    return queryInterface.dropTable('exercises');
  },
};
