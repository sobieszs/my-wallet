'use strict';
module.exports = (sequelize, DataTypes) => {
	
	var Expense = sequelize.define('expense' {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
		amount: DataTypes.INTEGER,
		date: DataTypes.DATE
	});

	//foreign key from category model
	

	Expense.associate = function(models){
		models.Expense.belongsTo(models.User)
	}
}