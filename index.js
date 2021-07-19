const { execSync } = require("child_process");
const core = require("@actions/core");

try {
  let command;
  if (!!process.env["STATE_isPre"]) {
    command = core.getInput("pre-command");
  } else if (!!process.env["STATE_isPost"]) {
    command = core.getInput("post-command");
  } else {
    command = core.getInput("main-command");
  }
  console.log(`Command: ${command}`);

  const output = execSync(command);
  console.log(output);
} catch (error) {
  core.setFailed(error.message);
}
