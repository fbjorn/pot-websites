---
path: "/guides/twins"
date: "2019-01-15T13:30:33.962Z"
title: "How to create simple Digital Twin with APIs"
type: "page"
---


# Learning objectives

* How to use Identity API to create Digital Twin
* How to use standard data models and ontologies with Digital Twins



# Lets get started!

Structure of the guide

## Create Building

```
curl -X POST https://api-sandbox.oftrust.net/identities/v1/ \
-H "Content-Type: application/json" \
-H "Authorization: Bearer REPLACE_WITH_YOUR_TOKEN" \
-d '{
    "context": "https://standards.oftrust.net/contexts/identity-building.jsonld",
    "type": "Building",
    "name": "Platform of Trust HQ",
    "data": {
        "description": "Platform of Trust company headquarters in Tampere."
    }
}'
```

## Create floor and attach to Building


Create a floor with Identity REST API. 

```
curl -X POST https://api-sandbox.oftrust.net/identities/v1/ \
-H "Content-Type: application/json" \
-H "Authorization: Bearer REPLACE_WITH_YOUR_TOKEN" \
-d '{
    "context": "https://standards.oftrust.net/contexts/identity-floor.jsonld",
    "type": "Floor",
    "name": "1st Floor",
    "data": {
        "description": "First floor of the Platform of Trust company headquarters in Tampere."
    }
}'
```

Attach it to the building we created before. The attaching is done by linking the objects with Identity REST API. 

```
code here
```

## Create room and attach to floor


## Create device and attach to room



## Simple Digital Twin is done


# Create account and get started!

If you are application developer, it might be a good idea to read [Application Development Guide](/developers/getstarted/build-apps) first. 

If you are integrating data and creating data products, take a look at the [Data Product Guide](/developers/getstarted/data-products). 

Open sandbox is your friend! Isolated environment for testing applications and data product integrations, read more from [Sandbox Guide](/developers/getstarted/sandbox).