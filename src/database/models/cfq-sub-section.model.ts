"use strict";

import { CFQSubSectionAttributes, QuestionTypeEnum } from "../../modules/supervision-form/custom-form/cf.types";
import { Model, UUIDV4 } from "sequelize";



module.exports = (sequelize: any, DataTypes: any) => {
	class CFQSubSection extends Model<CFQSubSectionAttributes> implements CFQSubSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		question!: string
		detail!: string
		type!: QuestionTypeEnum
		customFormSubSectionId!: string
		priority!: string

		static associate(models: any) {
			// define association here
			CFQSubSection.belongsTo(models.CFSubSection);
			CFQSubSection.hasMany(models.ResultCFOEQSubSection);
			CFQSubSection.hasMany(models.ResultCFBQSubSection);
		}
	}

	CFQSubSection.init(
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
			type : {
				type: DataTypes.ENUM([
					QuestionTypeEnum.BOOLEAN,
					QuestionTypeEnum.OPEN_END
				]),
				defaultValue: QuestionTypeEnum.BOOLEAN
			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,	
			},
			CFSubSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: false,
				field: "cf_sub_section_id"
			},
			
		},
		{
			sequelize,
			underscored: true,
			modelName: "CFQSubSection",
			tableName: "cfq_sub_section",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return CFQSubSection;

};
