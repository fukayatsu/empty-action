const { execSync } = require("child_process");
const core = require("@actions/core");

try {
  const command = core.getInput("main-command");

  const githubRunId = core.getInput("github-run-id");
  const githubToken = core.getInput("github-token");
  const awsDefaultRegion = core.getInput("aws-default-region");
  const awsAccessKeyId = core.getInput("aws-access-key-id");
  const awsSecretAccessKey = core.getInput("aws-secret-access-key");

  let env = {};
  if (githubRunId != "") {
    env.GITHUB_RUN_ID = githubRunId;
  }
  if (githubToken != "") {
    env.GITHUB_TOKEN = githubToken;
  }
  if (awsDefaultRegion != "") {
    env.AWS_DEFAULT_REGION = awsDefaultRegion;
  }
  if (awsAccessKeyId != "") {
    env.AWS_ACCESS_KEY_ID = awsAccessKeyId;
  }
  if (awsSecretAccessKey != "") {
    env.AWS_SECRET_ACCESS_KEY = awsSecretAccessKey;
  }

  let option = {};
  if (Object.keys(env).length > 0) {
    option.env = env;
  }
  output = execSync(command, option);
  console.log(output.toString());
} catch (error) {
  core.setFailed(error.message);
}
