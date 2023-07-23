"use strict";

import { ResultCFOEQSubSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class ResultCFOEQSubSection extends Model<ResultCFOEQSubSectionAttributes> implements ResultCFOEQSubSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		result!: string
		remark!: string
		file!: string
		CFQSubSectionId!: string
		schoolSupervisionFormId! : string

		static associate(models: any) {
			// define association here
			ResultCFOEQSubSection.belongsTo(models.CFQSubSection);
			ResultCFOEQSubSection.belongsTo(models.SchoolSupervisionForm);
			// ResultCFOEQSubSection.hasMany(models.RatingScaleSection);
		}
	}

	ResultCFOEQSubSection.init(
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
			CFQSubSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "cfq_sub_section_id"
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
			modelName: "ResultCFOEQSubSection",
			tableName: "result_cfoeq_sub_section",
			timestamps: true,
		}
	);

	return ResultCFOEQSubSection;

};
