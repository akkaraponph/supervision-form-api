"use strict";

import { Model, UUIDV4 } from "sequelize";


import { CFSubSectionAttributes } from "../../modules/supervision-form/custom-form/cf.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class CFSubSection extends Model<CFSubSectionAttributes> implements CFSubSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string
		section!: string
		customFormSectionId!: string
		priority! : string

		static associate(models: any) {
			// define association here
			CFSubSection.belongsTo(models.CFSection);
			CFSubSection.hasMany(models.CFQSubSection);
		}
	}

	CFSubSection.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			section: {
				type: DataTypes.STRING,
				allowNull: true,
			},

			CFSectionId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: "cf_section_id"
			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,	
			},
		},
		{
			sequelize,
			underscored: true,
			modelName: "CFSubSection",
			tableName: "cf_sub_section",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return CFSubSection;

};
