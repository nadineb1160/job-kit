var db = require("../models");

module.exports = function (app) {
    
    // Get All Possible Sources from an Application
    app.get("/api/application/:applicationId/source/all", (req, res) => {
        db.Source.findAll({
            where: {
                ApplicationId: req.params.applicationId
            }
        }).then(sources => {
            res.json(sources);
        }).catch(err => {
            console.log(err);
            res.send("No data found");
        });
            
    });

    // Get Single Source from an Application
    app.get("/api/application/:applicationId/source/:sourceId", (req, res) => {
        db.Source.findOne({
            where: {
                ApplicationId: req.params.applicationId,
                id: req.params.sourceId
            },
        }).then(source => {
            res.json(source);
        }).catch(err => {
            console.log(err);
            res.send("No data found");
        });
            
    });

    // Create New Source
    app.post("/api/application/:applicationId/source", (req, res) => {
        db.Source.create(req.body, {
        }).then(source => {
            res.send(`Source, ${source.source}, has been created`)
        }).catch(err => {
            console.log(err);
            res.send(`Source, ${source.source}, was NOT created`)
        });
    });

     // Update Source
     app.put("/api/application/:applicationId/source/:sourceId", (req, res) => {
        db.Source.update({
            where: {
                ApplicationId: req.params.applicationId,
                id: req.params.sourceId
            },
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });  
    });

    // Delete Source
    app.delete("/api/application/:applicationId/source/:sourceId", (req, res) => {
        db.Source.destroy({
            where: {
                ApplicationId: req.params.applicationId,
                id: req.params.sourceId
            },
        }).then(() => {
            res.send(true);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    });

}