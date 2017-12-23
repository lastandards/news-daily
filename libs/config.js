import Sequelize from "sequelize";
const Op = Sequelize.Op;

module.exports = {
    database: "datand",
    username: "ndadmin",
    password: "123",
    params: {
        host: "192.168.0.103:5432",
        dialect: "postgres",
        operatorsAliases:Op,
        define: {
            underscored: true
        }
    }
};