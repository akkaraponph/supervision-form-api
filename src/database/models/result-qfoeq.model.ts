"use strict";

import { Model, UUIDV4 } from "sequelize";


import { ResultQFOEQAttributes } from "../../modules/supervision-form/question-form/qf.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class ResultQFOEQ extends Model<ResultQFOEQAttributes> implements ResultQFOEQAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		result!: string;
		file!: any;
		QFId!: string
		schoolSupervisionFormId!: string

		static associate(models: any) {
			// define association here
			ResultQFOEQ.belongsTo(models.QF);
			ResultQFOEQ.belongsTo(models.SchoolSupervisionForm);
		}
	}

	ResultQFOEQ.init(
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
			file: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			QFId: {
				type: DataTypes.UUID,
				field: 'qf_id'
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
			modelName: "ResultQFOEQ",
			tableName: "result_qfoeq",
			timestamps: true,
		}
	);

	return ResultQFOEQ;

};
