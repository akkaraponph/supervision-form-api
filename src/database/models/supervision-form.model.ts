"use strict";

import { Model, UUIDV4 } from "sequelize";

import { SupervisionFormAttributes } from "../../modules/supervision-form/supervision-form.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class SupervisionForm extends Model<SupervisionFormAttributes> implements SupervisionFormAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		name!: string;  // แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน 
		detail!: string;
		term!: string;
		educationYear!: string;
		supervisionFormTypeId!: string;
		suggestion!: string;
		supervisorName!: string;


		static associate(models: any) {
			// define association here
			// SupervisionForm.belongsTo(models.School, {
			// 	foreignKey: {
			// 		name: 'schoolId',
			// 		allowNull: false,
			// 		field: 'school_id',
			// 	}
			// });
			SupervisionForm.belongsTo(models.SupervisionFormType, {
				foreignKey: {
					name: 'supervisionFormTypeId',
					allowNull: false,
					field: 'supervision_form_type_id',
				}
			});
			SupervisionForm.hasMany(models.RSFSection);
			SupervisionForm.hasMany(models.SchoolSupervisionForm);
		}
	}

	SupervisionForm.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			detail: {
				type: DataTypes.STRING,
				allowNull: true,
			},

			term: {
				type: DataTypes.STRING(1),
				allowNull: false,
			},
			year: {
				type: DataTypes.STRING(4),
				allowNull: true,
				field: 'year'
			},
			suggestion: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		
			supervisionFormTypeId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'supervision_form_type_id'
			},
			// schoolId: {
			// 	type: DataTypes.UUID,
			// 	allowNull: false,
			// 	field: 'school_id'
			// }
		},
		{
			sequelize,
			underscored: true,
			timestamps: true,
			modelName: "SupervisionForm",
			tableName: "supervision_form",

		}
	);

	return SupervisionForm;

};
