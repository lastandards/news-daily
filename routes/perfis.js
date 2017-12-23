module.exports = app => {

        const Perfil = app.db.models.Perfil;
        
        app.get("/perfis", (req, res) => {
            Perfil.findAll({}).then-((perfis) => {
            res.json({perfil: perfil});
        });
    });
}