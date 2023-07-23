"use strict";

import { ResultCFOEQSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class ResultCFOEQSection extends Model<ResultCFOEQSectionAttributes> implements ResultCFOEQSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		result!: string
		remark!: string
		file!: string
		CFQSectionId!: string
		schoolSupervisionFormId!:string

		static associate(models: any) {
			// define association here
			ResultCFOEQSection.belongsTo(models.CFQSection);
			ResultCFOEQSection.belongsTo(models.SchoolSupervisionForm);
			// ResultCFOEQSection.hasMany(models.RatingScaleSection);
		}
	}

	ResultCFOEQSection.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			result: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			remark: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			file : {
				type: DataTypes.STRING,
				allowNull: true,
			},
			CFQSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "cfq_section_id"
			},
			schoolSupervisionFormId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "school_supervision_form_id"
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "ResultCFOEQSection",
			tableName: "result_cfoeq_section",
			timestamps: true,
		}
	);

	return ResultCFOEQSection;

};
