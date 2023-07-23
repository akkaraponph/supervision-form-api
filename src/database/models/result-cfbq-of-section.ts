"use strict";

import { ResultCFBQSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class ResultCFBQSection extends Model<ResultCFBQSectionAttributes> implements ResultCFBQSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		result!: boolean
		remark!: string
		file!: string
		CFQSectionId!: string
		schoolSupervisionFormId!: string

		static associate(models: any) {
			// define association here
			ResultCFBQSection.belongsTo(models.CFQSection);
			ResultCFBQSection.belongsTo(models.SchoolSupervisionForm);
			// ResultCFBQSection.hasMany(models.RatingScaleSection);
		}
	}

	ResultCFBQSection.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			result: {
				type: DataTypes.BOOLEAN,
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
			modelName: "ResultCFBQSection",
			tableName: "result_cfbq_section",
			timestamps: true,
		}
	);

	return ResultCFBQSection;

};
