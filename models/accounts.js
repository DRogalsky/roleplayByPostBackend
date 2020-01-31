module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    // TODO: associations

    return Player;
}