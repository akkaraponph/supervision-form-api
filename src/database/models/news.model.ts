"use strict";

import { Model, UUIDV4 } from "sequelize";


import { NewsAttributes } from "../../modules/news/news.types";


module.exports = (sequelize: any, DataTypes: any) => {
	class News extends Model<NewsAttributes> implements NewsAttributes {

		id!: string
		name!: string
		description!: string
		editor!: string
		content!: string
		link!: string
		img1!:string
		img2!:string
		img3!:string
		img4!:string
		img5!:string

		static associate(models: any) {
			// define association here
			// News.belongsTo(models.User);
		}
	}

	News.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				allowNull: false,
				primaryKey: true,
				field: 'id'
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			editor: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			link: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			img1: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			img2: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			img3: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			img4: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			img5: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		
		},
		{
			sequelize,
			modelName: "News",
			tableName: "news",
			underscored: true,
			timestamps: true,
		}
	);

	return News;

};
