'use strict';

var Repos = require("./repoFactory");

/**
 * Example of the Constructor pattern
 */

// First we create the constructor function.
/**
 * Constructor for Task objects.
 * Data parameter takes an object with the name value as a string.
 * 
 * @param {Object} data
 */
var Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

// Next we'll add properties to the object prototype
/**
 * Call this to complete the task.
 */
Task.prototype.complete = function () {
    this.completed = true;
    console.log(`Task completed: ${this.name}`);
}

/**
 * Call this to save the task to the database.
 */
Task.prototype.save = function () {
    console.log(`Saving task: ${this.name}`);
    Repos.tasks.save(this);
}

// Then we can export the object for use in our Node.js app
module.exports = Task;
