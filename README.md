# Empty javascript action
## Inputs

## `pre-command`

Command for pre step. Default `"echo pre"`.

## `main-command`

Command for main step. Default `"echo main"`.

## `post-command`

Command for post step. Default `"echo post"`.

## `github-token`

github token for commands. Default `""`.
## Outputs

None.

## Example usage

uses: fukayatsu/empty-action@master
with:
  post-command: 'echo do some cleanup'
