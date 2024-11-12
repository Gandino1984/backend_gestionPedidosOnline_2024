// productions_model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import producer_model from "./producer_model.js";
import product_model from "./product_model.js";

const productions_model = sequelize.define("productions", {
    producer_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: producer_model,
            key: 'id_producer'
        }
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        references: {
            model: product_model,
            key: 'id_product'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default productions_model;