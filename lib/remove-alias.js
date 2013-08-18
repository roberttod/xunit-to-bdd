module.exports = function (nameList, sourceCode) {
  var falafel = require("falafel");
  var _       = require("grunt").util._;

  var aliasLists = {};

  nameList.forEach(function (name) {
    aliasLists[name] = [name];
  });


  // First parse

  var syntax = falafel(sourceCode, function (node) {

    // Remove any aliases decloration/assignment statements
    try {
      if (node.type === "VariableDeclarator" && aliasLists[node.init.name]) {
        node.parent.update("");
        aliasLists[node.init.name].push(node.id.name);
      } else if (node.type === "AssignmentExpression" && aliasLists[node.right.name]) {
        node.parent.update("");
        aliasLists[node.right.name].push(node.left.name);
      }
    } catch (e) {}

    _.each(aliasLists, function (aliasList, name) {
      // Replace any aliases
      try {
        if (node.type === "Identifier" && aliasList.indexOf(node.name) > -1) {
          node.update(name);
        }
      } catch (e) {}
    });


  });

  return syntax.toString();

}