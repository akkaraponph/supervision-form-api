"use strict";

import { Model, UUIDV4 } from "sequelize";


import { UserRole, UserAttributes } from "../../modules/user/user.types";


module.exports = (sequelize: any, DataTypes: any) => {
	class User extends Model<UserAttributes> implements UserAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		username!: string;
		password!: string;
		// email!: string;
		// admin, user, personel
		status!: string; 


		static associate(models: any) {
			// define association here
			User.hasMany(models.School);
			User.hasMany(models.Personnel);
		}
	}

	User.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			username: {
				type: DataTypes.STRING(64),
				unique: true,
				allowNull: false,
				field: 'username'
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'password'

			},
			// email: {
			// 	type: DataTypes.STRING(120),
			// 	allowNull: true,
			// 	field: 'email'
			// },
			status: {
				type: DataTypes.ENUM(UserRole.ADMIN, UserRole.USER, UserRole.PERSONNEL),
				field: 'status',
				allowNull: false,
				defaultValue: UserRole.PERSONNEL,
			},
			
			// role: {

			// 	type: DataTypes.ENUM(UserRole.ADMIN, UserRole.USER),
			// 	allowNull: false,
			// 	defaultValue: 'user',
			// },
		},
		{
			sequelize,
			underscored: true,
			modelName: "User",
			tableName: "user",
			timestamps: true,
		}
	);

	return User;

};
