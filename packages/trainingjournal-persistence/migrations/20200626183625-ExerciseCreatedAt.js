// @flow

/* ::
import  SequelizeType, { type QueryInterface } from 'sequelize'

*/

module.exports = {
  up: (queryInterface /* : Object */, Sequelize /* :Object */) /* : Promise<any> */ => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'exercises',
          'createdAt',
          {
            type: Sequelize.DATE,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'exercises',
          'updatedAt',
          {
            type: Sequelize.DATE,
          },
          { transaction: t },
        ),
      ]);
    });
  },

  down: (queryInterface /* : Object */) /* :any */ => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('exercises', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('exercises', 'updatedAt', { transaction: t }),
      ]);
    });
  },
};
