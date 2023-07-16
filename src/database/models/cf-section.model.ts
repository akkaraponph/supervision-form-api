"use strict";

import { Model, UUIDV4 } from "sequelize";


import { CFSectionAttributes } from "../../modules/supervision-form/custom-form/cf.types"

module.exports = (sequelize: any, DataTypes: any) => {
	class CFSection extends Model<CFSectionAttributes> implements CFSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		section		!: string;
		detail!: string;
		haveSubSection !: boolean;
		priority!: string;

		static associate(models: any) {
			// define association here
			CFSection.belongsTo(models.SupervisionForm);
			CFSection.hasMany(models.CFSubSection);
			CFSection.hasMany(models.CFQSection);
		}
	}

	CFSection.init(
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
			haveSubSection: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				field: 'have_sub_section'
			},
			priority: {
				type: DataTypes.STRING,
				allowNull: false,	
			},
			supervisionFormId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'supervision_form_id'
			},
			
		},
		{
			sequelize,
			underscored: true,
			modelName: "CFSection",
			tableName: "cf_section",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return CFSection;

};
