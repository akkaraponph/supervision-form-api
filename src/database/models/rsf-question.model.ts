"use strict";

import { Model, UUIDV4 } from "sequelize";


import { RSFQuestionAttributes } from "../../modules/supervision-form/rating-scale-form/rsf.types";


module.exports = (sequelize: any, DataTypes: any) => {
	class RSFQuestion extends Model<RSFQuestionAttributes> implements RSFQuestionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		question!: string;
		RSFSectionId!: string;
		priority!: string

		static associate(models: any) {
			// define association here
			RSFQuestion.belongsTo(models.RSFSection);
			RSFQuestion.hasMany(models.ResultRSF);
		}
	}

	RSFQuestion.init(
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
			RSFSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'rsf_section_id'

			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,
			},

		},
		{
			sequelize,
			underscored: true,
			modelName: "RSFQuestion",
			tableName: "rsf_question",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return RSFQuestion;

};
