#!/usr/bin/env node
'use strict';
const meow = require('meow');
const { isNpm } = require('is-npm');
const logSymbols = require('log-symbols');

const {flags} = meow(`
	Usage
	  $ is-npm
	  ✔ This project uses NPM
	Options
	  --quiet  Silence output (useful for scripts)
	Exits with code 0 if the project uses Yarn, otherwise code 2
`, {
	flags: {
		quiet: {
			type: 'boolean'
		}
	}
});

if (isNpm) {
	if (!flags.quiet) {
		console.log(`${logSymbols.success} This project uses NPM`);
	}

	process.exit(0);
} else {
	if (!flags.quiet) {
		console.log(`${logSymbols.error} This project does not use NPM`);
	}

	process.exit(2);
}