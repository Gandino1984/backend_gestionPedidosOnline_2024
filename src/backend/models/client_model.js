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

// client.belongsToMany(product, {through: "orders"});
// product.belongsToMany(client, {through: "orders"});

export default client_model;