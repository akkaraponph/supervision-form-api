"use strict";

import { Model, UUIDV4 } from "sequelize";


import { RSFSectionAttributes } from "../../modules/supervision-form/rating-scale-form/rsf.types";


module.exports = (sequelize: any, DataTypes: any) => {
	class RSFSection extends Model<RSFSectionAttributes> implements RSFSectionAttributes {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		id!: string;
		section!: string;
		supervisionFormId!: string;

		static associate(models: any) {
			// define association here
			RSFSection.belongsTo(models.SupervisionForm);
			RSFSection.hasMany(models.RSFQuestion);
		}
	}

	RSFSection.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			type: {
				type: DataTypes.STRING,
				allowNull: true,
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
			modelName: "RSFSection",
			tableName: "rsf_section",
			timestamps: false,
			// createdAt: 'created_at',
			// updatedAt: 'updated_at',
		}
	);

	return RSFSection;

};
