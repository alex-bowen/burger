
var express = require("express");
var orm = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM.

// export

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
    // ,
    // delete: function(condition, cb) {
    //   orm.delete("burgers", condition, function(res) {
    //     cb(res);
    //   });
    // }
  };
  
  module.exports = burger;
