

## Overview

## Problem

Phone numbers can be hijacked, allowing attacker to intercept phone calls and text messages.
Often, victim is unaware of problem for hours.

Examples:
* Jack Dorsey, Twitter CEO
  - The hackers used the accounts to post offensive messages to millions of followers. 
  - They also gained access to private communications.

* Rob Ross, Entrepreneur
  - Lost over $1 million in Bitcoin

* Laura Shin, Blockchain Journalist
  - Checkout Unconfirmed podcast episode 105

## Current System

Mobile Providers maintain information required to route calls from human friendly phone numbers to IMEI's

Only mobile networks are aware of phone number re-assignments.

+---------------------------------------
| Phone Number | IMEI          | ... 
+---------------------------------------
| 555-1234       9876543210123 
| 555-5678       2467909753125
| ...
> UPDATE db, SET IMEI = '<hacker_phone>';


# Lack of transparency
Service providers have no way to know if a phone number recently transferred to a new device.

Difficult problem, many mobile providers, many countries.


# Old industry, meet future companies
Existing telcos have had a long time to fix SIM issues. 

Completely changing global infrasture is an enourmous undertaking. 

Start by adding transparency. A new breed of security-first mobile providers can protect their customers by providing transparency and tools to protect users against SIM attacks.


# A distributed solution
Provide minimal information about significant account changes on a public ledger.

{ 
    phoneNumber: hash('555-1234'),
    event: 'SIM_CHANGE'
}

A decentralized solution, inspired by Google's Certificate Transparency ledger.


Any interested party can query to see if a phone number has been transferred recently.


[ I forgot my password ] -> has phone number changed recently?  -- no --> continue account recovery  -- yes --> temporary account freeze


* Additional scrutiney for account recovery
* Temporary account lockout
* Reset 2FA cache


# Pull the plug
Companies are slow to react to SIM attacks. Many customer service agents do not understand the problem. The longer an attacker has access to your accounts, the more damage that can occur. 

Give users a kill switch to immedtely shutdown their account, no waiting on hold w. customer service!

# How it works
Provide user with a QR code.
  In Emergency, SCAN [...]

-> Scan code from any device!
-> Pre-signed metatxn from a ephemeral wallet submitted by relay 
    - no gas, wallets, etc!
-> emit: ACCOUNT_DISABLE
-> Phone number shuts down
-> Service providers alerted




---- Account Lock ----

You are about to turn off
the following phone number:

    555-1234

Phone calls, text messages, and data will stop working.

Your phone will continue to make 
emergency phone calls. 

[ Turn Off Number ]


---- Summary -----

You have locked down 555-1234.

Please contact a customer service agent for help:

By Phone:   1-800-922-0204
By Email:   help@myprovider.com
By Twitter: @myprovider

