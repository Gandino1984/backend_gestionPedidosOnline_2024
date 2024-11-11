import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const client_model = sequelize.define("client", {
    id_client: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_client: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    pass_client: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    location_client: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

client_model.belongsToMany(product_model, {through: "orders"});
product_model.belongsToMany(client_model, {through: "orders"});

export default client_model;