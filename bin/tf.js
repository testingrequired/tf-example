import { run, config, middleware } from "@testingrequired/tf";

const { starter, matchTestFiles, specSyntax, mock } = middleware;

run(config(starter, matchTestFiles("./tests/**/*.test.js"), specSyntax, mock));
