"use strict";

import { CFQSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class CFQSection extends Model<CFQSectionAttributes> implements CFQSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		question!: string
		detail!: string
		type!: QuestionTypeEnum
		CFSectionId!: string
		priority!: string

		static associate(models: any) {
			// define association here
			CFQSection.belongsTo(models.CFSection);
			CFQSection.hasMany(models.ResultCFOEQSection);
			// CFQSection.hasMany(models.ResultCFBQSection);
		}
	}

	CFQSection.init(
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
			detail: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			type: {
				type: DataTypes.ENUM([
					QuestionTypeEnum.BOOLEAN,
					QuestionTypeEnum.OPEN_END
				]),
				defaultValue: QuestionTypeEnum.BOOLEAN
			},
			CFSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "cf_section_id"
			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,	
			},		},
		{
			sequelize,
			underscored: true,
			modelName: "CFQSection",
			tableName: "cfq_section",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return CFQSection;

};
