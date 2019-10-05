import { run, config, middlewear } from "@testingrequired/tf";

const { starter, matchTestFiles, specSyntax, mock } = middlewear;

run(config(starter, matchTestFiles("./tests/**/*.test.js"), specSyntax, mock));
