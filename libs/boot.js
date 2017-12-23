module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`API News Daily = porta ${app.get("port")}`);
        });
    });
};