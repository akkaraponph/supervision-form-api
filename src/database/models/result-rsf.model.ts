"use strict";

import { Model, UUIDV4 } from "sequelize";


import { ResultRSFAttributes } from "../../modules/supervision-form/rating-scale-form/rsf.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class ResultRSF extends Model<ResultRSFAttributes> implements ResultRSFAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		score!: number;
		RSFQuestionId!: string;
		schoolSupervisionFormId!: string;

		static associate(models: any) {
			// define association here
			ResultRSF.belongsTo(models.RSFQuestion);
			ResultRSF.belongsTo(models.SchoolSupervisionForm, {
				onDelete: 'CASCADE'
			});
			// ResultRSF.belongsTo(models.School);
		}
	}

	ResultRSF.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			score: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			RSFQuestionId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: false,
				field: 'rsf_question_id'
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
			modelName: "ResultRSF",
			tableName: "result_rsf",
			timestamps: true
		}
	);

	return ResultRSF;

};
