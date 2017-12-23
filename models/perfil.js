module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define("Perfil", {
        idPerfil: {
          type: DataTypes.INTEGER,  
          primaryKey: true,
          autoIncrement: true,
          field: 'id_perfil',
        },        
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamp: false,
        tableName: "perfil"
    });
    return Perfil;
};