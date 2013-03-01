davidlljones.com
================

The Life and Works of David Jones


Getting Started
---------------

Install [Node.js](http://nodejs.org/)

Install grunt:

	npm install -g grunt-cli

Install dependencies:

	cd /path/to/davidlljones
	npm install

Build the site:

	grunt

The built site can be found at dist/

Grunt can watch the project and compile LESS and coffeescript when you make changes to the files. Grunt is setup to _not_ minify files when watching them to aid debugging whilst in development.

	grunt watch

Project build settings are configured in the usual `Gruntfile.js`.
