'use strict'
const core = require('@actions/core');
const Slack = require('slack-node');

async function run() {
  try {
    const slack = new Slack();
    const slack_token = core.getInput('SLACK_TOKEN')
    const channel = core.getInput('channel')
    const text = core.getInput('text')
    const color = core.getInput('color')
    const github_actor = process.env.GITHUB_ACTOR;

    const webhookUri = "https://hooks.slack.com/services/T0PGV4TEJ/" + slack_token;

    slack.setWebhook(webhookUri);
    if (color || github_actor) {
      slack.webhook({
        channel: channel,
        attachments: [
          {
            "author_name": github_actor,
            "author_icon": "https://avatars2.githubusercontent.com/" + github_actor,
            "color": color,
            "text": text
          }
        ]
      }, function(err, response) {
        console.log(response);
      });
    }
    else {
      slack.webhook({
        channel: channel,
        text: text
      }, function(err, response) {
        console.log(response);
      });
    }
  } catch (err) {
    console.log(err)
  }
}

run()
