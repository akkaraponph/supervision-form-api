"use strict";

import { ResultCFBQSubSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class ResultCFBQSubSection extends Model<ResultCFBQSubSectionAttributes> implements ResultCFBQSubSectionAttributes {

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
		schoolSupervisionFormId!:string

		static associate(models: any) {
			// define association here
			ResultCFBQSubSection.belongsTo(models.CFQSubSection);
			ResultCFBQSubSection.belongsTo(models.SchoolSupervisionForm);
			// ResultCFBQSubSection.hasMany(models.RatingScaleSection);
		}
	}

	ResultCFBQSubSection.init(
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
			modelName: "ResultCFBQSubSection",
			tableName: "result_cfbq_sub_section",
			timestamps: true,
		}
	);

	return ResultCFBQSubSection;

};
