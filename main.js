const { execSync } = require("child_process");
const core = require("@actions/core");

try {
  const command = core.getInput("main-command");
  const githubToken = core.getInput("github-token");
  let option = {};

  if (githubToken != "") {
    option["env"] = { GITHUB_TOKEN: githubToken };
  }

  output = execSync(command, option);
  console.log(output.toString());
} catch (error) {
  core.setFailed(error.message);
}
