#!/usr/bin/env node

const {
  default: tf,
  run,
  defaults,
  specSyntax,
  matchTestFiles
} = require("@testingrequired/tf");

run(tf(defaults, matchTestFiles("./**/*.test.js"), specSyntax));
