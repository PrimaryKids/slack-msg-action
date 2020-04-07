# Slack message javascript actiopn

This action uses sends messages to slack via a webhook token

## Inputs

* `SLACK_TOKEN` - **Required** The webhook token for authentication to slack. Should be set in GitHub Secrets for the repo this action is being used.
* `text` - **Required** The contents of the message we want to post to slack
* `channel` - **Required** The name of the channel. eg. #push-channel
* `color` - **Optional** The color of the attachment block. Valid values are good, warning, danger or any hex color code (eg. `#439FE0`)
* `title` - **Optional** The title of the attachment block.

## Example usage

```
uses: PrimaryKids/actions/shopify-theme-api@master
with:
  text: 'I'm posting to slack!''
  channel: '#push-channel'
  SLACK_TOKEN: ${{ secrets.SLACK_TOKEN }}
```

## Building

When making changes to the index.js for this action it has to be rebuilt with ncc. See https://github.com/zeit/ncc for installation instructions and details. This tool compiles with all dependencies into a single file so we don't have to include the node_modules dir and speeds up the action.

Example: `ncc build index.js`
