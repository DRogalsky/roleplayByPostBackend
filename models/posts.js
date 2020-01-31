module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {

        gameName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        playerNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gameOpen: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        gameMaster: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    //TODO: has 1 game master has many players has many posts
}