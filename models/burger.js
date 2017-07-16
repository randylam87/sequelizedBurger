module.exports = function (sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burgerName: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            default: 0
        },
        devouredBy: {
            type: DataTypes.STRING,
            default: null
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return Burger;
};