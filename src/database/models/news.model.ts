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
		cover!: string
		// img1!:string
		// img2!:string
		// img3!:string
		// img4!:string
		// img5!:string
		imageList!: string

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
			cover: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			imageList: {
				type: DataTypes.TEXT, // Use TEXT data type to store longer strings
				field: "image_list",
				allowNull: true, // Set allowNull to true if the field can be empty
			  },
			// img1: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// img2: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// img3: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// img4: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
			// img5: {
			// 	type: DataTypes.STRING,
			// 	allowNull: true,
			// },
		
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
