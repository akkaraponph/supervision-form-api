"use strict";

import { Model, UUIDV4 } from "sequelize";

import { PersonnelResultRSFAttributes } from "../../modules/supervision-form/rating-scale-form/rsf.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class PersonnelResultRSF extends Model<PersonnelResultRSFAttributes> implements PersonnelResultRSFAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		score!: number;
		RSFQuestionId!: string;
		personnelSupervisionFormId!: string;

		static associate(models: any) {
			// define association here
			PersonnelResultRSF.belongsTo(models.RSFQuestion);
			PersonnelResultRSF.belongsTo(models.PersonnelSupervisionForm, {
				onDelete: 'CASCADE'
			});
			// PersonnelResultRSF.belongsTo(models.School);
		}
	}

	PersonnelResultRSF.init(
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
			personnelSupervisionFormId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "personnel_supervision_form_id"
			},
			

		},
		{
			sequelize,
			underscored: true,
			modelName: "PersonnelResultRSF",
			tableName: "personnel_result_rsf",
			timestamps: true
		}
	);

	return PersonnelResultRSF;

};
