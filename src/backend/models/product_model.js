import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const product_model = sequelize.define("product", {
    id_product: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_product: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    price_product: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount_product: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    season_product: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});


export default product_model;