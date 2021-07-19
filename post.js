const { execSync } = require("child_process");
const core = require("@actions/core");

try {
  const command = core.getInput("post-command");
  const output = execSync(command);
  console.log(output.toString());
} catch (error) {
  core.setFailed(error.message);
}