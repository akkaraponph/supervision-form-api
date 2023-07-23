"use strict";

import { Model, UUIDV4 } from "sequelize";


import { ResultQFBQAttributes } from "../../modules/supervision-form/question-form/qf.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class ResultQFBQ extends Model<ResultQFBQAttributes> implements ResultQFBQAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		result!: boolean;
		file!: any;
		QFId!: string
		schoolSupervisionFormId!: string

		static associate(models: any) {
			// define association here
			ResultQFBQ.belongsTo(models.QF);
			ResultQFBQ.belongsTo(models.SchoolSupervisionForm);
		}
	}

	ResultQFBQ.init(
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
			modelName: "ResultQFBQ",
			tableName: "result_qfbq",
			timestamps: true,
		}
	);

	return ResultQFBQ;

};
