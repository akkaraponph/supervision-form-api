"use strict";
import { Model, UUIDV4 } from "sequelize";
import { PersonnelSupervisionFormAttributes } from "../../modules/supervision-form/school-supervision-form/school-supervision-form.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class PersonnelSupervisionForm extends Model<PersonnelSupervisionFormAttributes> implements PersonnelSupervisionFormAttributes {
		id!: string;
		schoolSupervisionFormId!: string;
		personnelId!: string;

		static associate(models: any) {
			// define association here
			// PersonnelSupervisionForm.belongsTo(models.SchoolSupervisionForm);
			PersonnelSupervisionForm.belongsTo(models.SchoolSupervisionForm, {
				onDelete: 'CASCADE'
			});

			PersonnelSupervisionForm.hasMany(models.PersonnelResultRSF);

		}
	}

	PersonnelSupervisionForm.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			schoolSupervisionFormId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: true,
				field: 'school_supervision_form_id'
			},
			personnelId: {
				type: DataTypes.UUID,
				allowNull: false,
				unique: false,
				field: 'personnel_id'
			},
		},
		{
			sequelize,
			underscored: true,
			timestamps: true,
			modelName: "PersonnelSupervisionForm",
			tableName: "personnel_supervision_form",
		}
	);

	return PersonnelSupervisionForm;

};
