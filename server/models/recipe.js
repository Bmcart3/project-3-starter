// Define the Recipe model
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prepTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cookTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        servings: {
            type: DataTypes.STRING,
            allowNull: true
        },
        directions: {
            type: DataTypes.STRING(1500),
            allowNull: false
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Relationships
    Recipe.associate = models => {
        // Recipes can have many Users & Users can have many Recipes
        Recipe.belongsToMany(models.User, { 
            through: "recipe_user" ,
            as: "users",
            foreignKey: "recipe_id"
        });

        // Recipes can have many Reviews
        Recipe.hasMany(models.Review);

        // Recipes can have many Ingredients & Ingredients can have many Recipes
        Recipe.belongsToMany(models.Ingredient, { 
            through: "recipe_ingredient",
            as: "ingredients",
            foreignKey: "recipe_id"
        });

        // Recipes can have many Categories & Categories can have many Recipes
        Recipe.belongsToMany(models.Category, { 
            through: "recipe_category",
            as: "categories",
            foreignKey: "recipe_id"
        });
    };

    // Return the Recipe model as defined to be exported to the app
    return Recipe;
}