"use strict";

import { Model, UUIDV4 } from "sequelize";
import { SchoolAttributes } from "../../modules/school/school.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class School extends Model<SchoolAttributes> implements SchoolAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		idSchool!: string;
		name!: string;
		size!: string;
		district!: string;
		email!: string;
		tel!: string;
		address!: string;
		junior!: string;
		senior!: string;
		director!: string;
		nTeacher!: string;
		nPersonnel!: string;
		teachingStyle!: string;
		openClass!: string;
		userId!: string;


		static associate(models: any) {
			// define association here
			// School.hasMany(models.RatingScaleScore);

			School.hasMany(models.SchoolSupervisionForm);		
			// School.hasMany(models.ResultRatingScale);		
			School.belongsTo(models.User)
		}
	}

	School.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			idSchool: {
				type: DataTypes.STRING,
				allowNull: true,
				field: 'id_school'
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'name'
			},
			size: {
				type: DataTypes.STRING,
				allowNull: true,
				field: 'size'
			},
			district: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'district'
			},
			email: {
				type: DataTypes.STRING(120),
				allowNull: true,
				field: 'email'
			},
			tel: {
				type: DataTypes.STRING(10),
				allowNull: true,
				field: 'tel'
			},
			address: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'address'
			},
			junior: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'junior'
			},
			senior: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'senior'
			},
			director: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'director'
			},
			nTeacher: {
				type: DataTypes.STRING(),
				allowNull: true,
				field: 'n_teacher'
			},
			nPersonnel: {
				type: DataTypes.STRING(),
				allowNull: true,
				field: 'n_personnel'
			},
			teachingStyle: {
				type: DataTypes.STRING(),
				allowNull: true,
				field: 'teaching_style'
			},
			openClass: {
				type: DataTypes.STRING(),
				allowNull: true,
				field: 'open_class'
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
			modelName: "School",
			tableName: "school",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return School;

};
