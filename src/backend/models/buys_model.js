// buys_model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import shop_model from "./shop_model.js";
import producer_model from "./producer_model.js";

const buys_model = sequelize.define("buys", {
    shop_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: shop_model,
            key: 'id_shop'
        }
    },
    producer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: producer_model,
            key: 'id_producer'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default buys_model;