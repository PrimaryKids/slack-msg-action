'use strict'
const core = require('@actions/core');
const Slack = require('slack-node');

async function run() {
  try {
    const slack = new Slack();
    const slack_token = core.getInput('SLACK_TOKEN')
    const channel = core.getInput('channel')
    const text = core.getInput('text')
    const webhookUri = "https://hooks.slack.com/services/T0PGV4TEJ/" + slack_token;

    slack.setWebhook(webhookUri);
    slack.webhook({
      channel: channel,
      text: text
    }, function(err, response) {
      console.log(response);
    });
  } catch (err) {
    console.log(err)
  }
}

run()
