#!/usr/bin/env node

import tf, {
  run,
  defaults,
  specSyntax,
  matchTestFiles,
  junit
} from "@testingrequired/tf";

run(
  tf(defaults, matchTestFiles("./**/*.test.js"), specSyntax, junit("junit.xml"))
);
