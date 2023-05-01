import { literal, QueryInterface } from 'sequelize';
import { ModelAttributes } from 'sequelize/types/model';

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('movietimes', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      movie: { type: 'varchar', allowNull: false },
      url: { type: 'timestamp', allowNull: false },
      isBookedOut: {
        type: 'boolean',
        defaultValue: false
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);

    await queryInterface.createTable('showrooms', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: 'varhcar',
        allowNull: false
      },
      createdAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: 'timestamp',
        defaultValue: literal('CURRENT_TIMESTAMP'),
      },
    } as ModelAttributes);

    await queryInterface.createTable('administrations', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: 'varhcar',
        allowNull: false
      },
      createdAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      }

    } as ModelAttributes);

    await queryInterface.createTable('pricing', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      showtime_id: {
        type: 'integer',
        allowNull: false,
        references: {
          model: 'movietimes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      price: {
        type: 'decimal',
        allowNull: false
      },
      premium_percentage: {
        type: 'decimal',
        allowNull: false
      },
      createdAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      }

    } as ModelAttributes);

    await queryInterface.createTable('pricing', {
      id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      showroom_id: {
        type: 'integer',
        allowNull: false,
        references: {
          model: 'showrooms',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      row: {
        type: 'integer',
        allowNull: false
      },
      number: {
        type: 'integer',
        allowNull: false
      },
      type: {
        type: 'varchar',
        allowNull: false
      },
      is_booked: {
        type: 'boolean',
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: 'timestamp',
        allowNull: false,
        defaultValue: literal('CURRENT_TIMESTAMP')
      }

    } as ModelAttributes);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  down: (queryInterface: QueryInterface) => {
    // do nothing
  },
};
