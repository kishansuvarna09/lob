#!/bin/bash

function addSshKeysToAgent() {
  echo "starting ssh agent:"
  echo ""

  eval `ssh-agent -s`
  echo ""

  echo "adding identities: "
  ssh-add /e/personal_keys/kishan_personal
  echo ""

  echo "list ssh key agents"
  ssh-add -l

  echo "ssh keys added to ssh agent."
}

function pushBranch() {
    addSshKeysToAgent
    echo "Enter your message"
    read message
    git add .
    git commit -m"${message}"

    git status
    echo "Pushing data to remote server!!!"
    git push origin $1

    # if [ -n "$(git status - porcelain)" ];
    # then
    #     echo "IT IS CLEAN"
    # else
    #     git status
    #     echo "Pushing data to remote server!!!"
    #     git push origin $1
    # fi
}

pushBranch main