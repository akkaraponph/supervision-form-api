"use strict";

import { FormType, SupervisionFormTypeAttributes, supervisionFormTypeEnum } from "../../modules/supervision-form/supervision-form-type.types";
import { Model, UUIDV4 } from "sequelize";


module.exports = (sequelize: any, DataTypes: any) => {
	class SupervisionFormType extends Model<SupervisionFormTypeAttributes> implements SupervisionFormTypeAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		type!: supervisionFormTypeEnum;  // PREPARING OPEN SCHOOL
		name!: string;  // แบบฟอร์ม รายการนิเทศติดตาม การเตรียมความพร้อมการเปิดภาคเรียน 
		formType!: FormType

		static associate(models: any) {
			// define association here
			// SupervisionFormType.hasMany(models.School);
			SupervisionFormType.hasMany(models.SupervisionForm);
		}
	}

	SupervisionFormType.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			type: {
				type: DataTypes.ENUM(
					supervisionFormTypeEnum.PREPARING_OPEN_SCHOOL,
					supervisionFormTypeEnum.SUPERVISION,
					supervisionFormTypeEnum.TRACKING
				),
				field: 'type',
				allowNull: false,
				defaultValue: supervisionFormTypeEnum.SUPERVISION,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			formType: {
				type: DataTypes.ENUM(
					FormType.QUESTION,
					FormType.RATING_SCALE,
					FormType.CUSTOM
				),
				allowNull: false,
				defaultValue: FormType.CUSTOM,
				field: "form_type"
			},
		},
		{
			sequelize,
			underscored: true,
			timestamps: true,
			modelName: "SupervisionFormType",
			tableName: "supervision_form_type",
		}
	);

	return SupervisionFormType;

};
