module.exports = (sequelize, DataTypes) => {
    let alias = "Categoria";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        }
    }
    let config = {
        tableName: "categorias", 
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);
    
   
    return Categoria;
    
}