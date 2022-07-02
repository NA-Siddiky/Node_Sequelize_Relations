module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER,
        }

    })
    return User;
}