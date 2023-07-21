"use strict";

import { Model, UUIDV4 } from "sequelize";


import { SchoolSupervisionFormAttributes } from "../../modules/supervision-form/school-supervision-form/school-supervision-form.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class SchoolSupervisionForm extends Model<SchoolSupervisionFormAttributes> implements SchoolSupervisionFormAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		schoolId!: string;
		supervisionFormId!: string;
		year!: string;
		term!: string;

		static associate(models: any) {
			// define association here
			SchoolSupervisionForm.belongsTo(models.SupervisionForm);
			SchoolSupervisionForm.belongsTo(models.School);

			SchoolSupervisionForm.hasMany(models.ResultCFBQSection);
			SchoolSupervisionForm.hasMany(models.ResultCFOEQSection);
			
			SchoolSupervisionForm.hasMany(models.ResultCFBQSubSection);
			SchoolSupervisionForm.hasMany(models.ResultCFOEQSubSection);

			SchoolSupervisionForm.hasMany(models.ResultRSF);
			
			SchoolSupervisionForm.hasMany(models.ResultQFBQ);
			SchoolSupervisionForm.hasMany(models.ResultQFOEQ);
		}
	}

	SchoolSupervisionForm.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
		
			year: {
				type: DataTypes.STRING(4),
				allowNull: false
			},
			term: {
				type: DataTypes.STRING(1),
				allowNull: false
			},
			supervisionFormId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: false,
				field: 'supervision_form_id'
			},
			schoolId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'school_id',
				unique: false,
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "SchoolSupervisionForm",
			tableName: "school_supervision_form",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return SchoolSupervisionForm;

};
