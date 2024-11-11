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
    }
);

// shop_model.belongsToMany(client_model, {through: "sales"});
// client_model.belongsToMany(shop_model, {through: "sales"});

// shop_model.belongsToMany(producer_model, {through: "buys"});
// producer_model.belongsToMany(shop_model, {through: "buys"});


export default shop_model;