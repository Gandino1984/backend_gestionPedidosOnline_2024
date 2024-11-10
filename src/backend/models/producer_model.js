import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const producer_model = sequelize.define("producer", {
    id_producer: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_producer: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location_producer: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default producer_model;