"use strict";

import { Model, UUIDV4 } from "sequelize";
import { PersonnelSchoolAttributes } from "../../modules/personnel/personnel.types";

module.exports = (sequelize: any, DataTypes: any) => {
	class PersonnelSchool extends Model<PersonnelSchoolAttributes> implements PersonnelSchoolAttributes {
		id!: string;
		personnelId!: string;
		schoolId!: string;

		static associate(models: any) {
			PersonnelSchool.belongsTo(models.School);
			PersonnelSchool.belongsTo(models.Personnel);
		}
	}

	PersonnelSchool.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			schoolId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'school_id'
			},
			personnelId: {
				type: DataTypes.UUID,
				allowNull: false,
				field: 'personnel_id'
			}
		},
		{
			sequelize,
			underscored: true,
			modelName: "PersonnelSchool",
			tableName: "personnel_school",
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		}
	);

	return PersonnelSchool;

};
