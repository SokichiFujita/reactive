var recast = require("recast");
var ReactDOMServer = require('react-dom/server');
var babel = require("babel-core");


// Let's turn this function declaration into a variable declaration.
var code1 = "<div>hello1</div>";
var code2 = "function add() { return <div>hello2</div>}";

// Parse the code using an interface similar to require("esprima").parse.
//var ast = recast.parse(code);
var ast = babel.transform(code1, { presets: ['es2015', 'react', 'stage-0'] }).code;

console.log(ast);

var abc = ReactDOMServer.renderToString(ast);
console.log(abc);


