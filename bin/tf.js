import tf, { run, middlewear } from "@testingrequired/tf";

const { defaults, matchTestFiles, specSyntax, junit } = middlewear;

run(
  tf(
    defaults,
    matchTestFiles("./tests/**/*.test.js"),
    specSyntax,
    junit("junit.xml")
  )
);
