import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const shop_model = sequelize.define("shop", {
    id_shop: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_shop: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pass_shop: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    location_shop: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default shop_model;