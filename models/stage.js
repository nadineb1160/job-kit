module.exports = function(sequelize, DataTypes) {
    var Stage = sequelize.define("Stage", {
        dateApplied: {
            type: DataTypes.STRING
        },
        currentStage: {
            type: DataTypes.STRING
        },
        dateCurrentStage: {
            type: DataTypes.STRING
        },
        nextStep: {
            type: DataTypes.TEXT
        },
        notes: {
            type: DataTypes.TEXT
        }
        
    })


    Stage.association = models => {
        models.Stage.hasMany(models.Contact, {foreignKey: 'id'}, {
            onDelete: "cascade"
        });
    }
    return Stage;
}
