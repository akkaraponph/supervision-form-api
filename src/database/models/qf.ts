"use strict";

import { Model, UUIDV4 } from "sequelize";


import { QFAttributes } from "../../modules/supervision-form/question-form/qf.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class QF extends Model<QFAttributes> implements QFAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		question!: string;
		supervisionFormId!: string;

		static associate(models: any) {
			// define association here
			QF.belongsTo(models.SupervisionForm);
			QF.hasMany(models.ResultQFBQ);
			QF.hasMany(models.ResultQFOEQ);
		}
	}

	QF.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			question: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			supervisionFormId: {
				type: DataTypes.UUID,
				field: 'supervision_form_id'
			},

		},
		{
			sequelize,
			underscored: true,
			modelName: "QF",
			tableName: "qf",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return QF;

};
