"use strict";

import { Model, UUIDV4 } from "sequelize";


import { PersonnelAttributes } from "../../modules/personnel/personnel.types";


module.exports = (sequelize: any, DataTypes: any) => {
	class Personnel extends Model<PersonnelAttributes> implements PersonnelAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		idPersonnel!: string;
		name!: string;
		lastname!: string;
		position!: string;
		group!: string;
		email!: string;
		address!: string;
		tel!: string;
		imgUrl!:string
		userId!: string;

		static associate(models: any) {
			// define association here
			Personnel.belongsTo(models.User);
		}
	}

	Personnel.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			idPersonnel: {
				type: DataTypes.STRING,
				allowNull: true,
				field: 'id_personnel'
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			lastname: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			position: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			group: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING(120),
				allowNull: true,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			tel: {
				type: DataTypes.STRING(10),
				allowNull: true,
			},
			imgUrl: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'user_id'
			}
		},
		{
			sequelize,
			underscored: true,
			modelName: "Personnel",
			tableName: "personnel",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return Personnel;

};
