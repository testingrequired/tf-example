import tf, { run, middlewear } from "@testingrequired/tf";

const { defaults, matchTestFiles, specSyntax, junit } = middlewear;

run(
  tf(defaults, matchTestFiles("./**/*.test.js"), specSyntax, junit("junit.xml"))
);
