import path from "path";

// It will give you the file name of the path.
console.log(path.basename("c:\\nodejs\\app.js"));

// It will give you the file name without its extention.
console.log(path.basename("c:\\nodejs\\app.js", ".js"));

// It will show you the directory with out the file name.
console.log(path.dirname("c:\\nodejs\\app.js", ".js"));

// It will give you the extention name.
console.log(path.extname("c:\\nodejs\\app.js", ".js"));

// It will join the path.
console.log(path.join("c:", "sagar", "webdev", "nodejs"));

// It will go up a level.
console.log(path.join("c:", "sagar", "webdev", ".."));

// It will go up to two level.
console.log(path.join("c:", "sagar", "webdev", "..", ".."));

// It simply normalize the path.
console.log(path.normalize("c:\\sagar\\nodejs\\app.js"));

// For parsing the path.
console.log(path.parse("c:\\sagar\\nodejs\\app.js"));
console.log(path.parse("c:\\sagar\\nodejs\\app.js").base);
console.log(path.parse("c:\\sagar\\nodejs\\app.js").name);
console.log(path.parse("c:\\sagar\\nodejs\\app.js").ext);
