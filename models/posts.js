module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {

        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postContent: {
            type: DataTypes.STRING,
            allowNull: false
        }

        // add a post date?

    })

    //TODO: has 1 player has 1 game

    return Post

}