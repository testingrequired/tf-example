import { run, pipeline, middlewear } from "@testingrequired/tf";

const { starter, matchTestFiles, specSyntax, mock } = middlewear;

run(
  pipeline(starter, matchTestFiles("./tests/**/*.test.js"), specSyntax, mock)
);
