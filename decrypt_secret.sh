#!/bin/sh 

mkdir $HOME/secrets
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASS_PHRASE" \
--output $HOME/secrets/my_secret.json my_secret.json.gpg
