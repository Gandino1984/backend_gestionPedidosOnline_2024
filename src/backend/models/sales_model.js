// sales_model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import shop_model from "./shop_model.js";
import client_model from "./client_model.js";

const sales_model = sequelize.define("sales", {
    shop_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: shop_model,
            key: 'id_shop'
        }
    },
    client_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: client_model,
            key: 'id_client'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default sales_model;