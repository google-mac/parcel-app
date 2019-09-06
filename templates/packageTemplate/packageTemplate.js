/*
	This is the template for package.json that the user will use
	I prefer to use the file system of node.js, I saw this easier
	than treat to use shelljs or child_process, because this gene-
	rate problems with the Task-list.
*/
const Package = {
	"name": process.argv[2],
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"dependencies": {

	},
	"devDependencies": {

	},
	"scripts": {
		"start": "parcel ./public/index.html",
    	"build": "parcel build ./public/index.html --public-url ./"
	},
	"author": "",
	"license": "MIT"
};
export{
	Package
}