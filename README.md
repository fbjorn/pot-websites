
[![Waffle.io - Columns and their card count](https://badge.waffle.io/PlatformOfTrust/website.svg?columns=all)](https://waffle.io/PlatformOfTrust/website)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Purpose and background
Portal is one stop shop to Platform of Trust.  

## For whom? 

### Business

### Customers


### Developers
* 1st tier – data providers, to enable easy addition of new data source
* 2nd tier - 3rd party application developers (+ managers) be productive in minutes and create the apps for the market
* 3rd tier - Component and tool providers build plugins, SDKs, packages for development frameworks to boost platform adaptation worldwide
* 4th tier - API providers to build functional APIs on top of the data – we provide management and monetization layers to extend platform capabilities. 

## Development practices

We use 2 week sprints. New release after each sprint

Epics are included in issues and are tagged with label ``EPIC``

User stories labelled as ``User Story`` 

We use waffle.io in sprint management ([Go to Waffle](https://waffle.io/PlatformOfTrust/developer.oftrust.net)). Waffle is the free and tasty way to plan, track, and organize work in GitHub. Built with everyone on your team in mind, Waffle provides a simple board interface for your GitHub Issues and Pull Requests. 

## Milestones 

Set in Github for: 
* pre-alpha
* alpha
* beta
* MVP (end of March 2019)

## FrontEnds with Gatsby/GraphQL React 

* Clone repository to local machine with 
* ``git clone https://github.com/PlatformOfTrust/pot-websites.git``
* ``cd developer-site or marketing-site``
* ``npm install``
* ``npm install --global gatsby-cli``
* ``gatsby develop -o -p 8000``
* Site will open in browser localhost:8000, use -p to change port

## CMS 
Netlify CMS is used for content creation (GUI). All content is stored in Github as markup files. Netlify GUI requires Github account and is run from files in /cmsadmin. Netlify configuration is in same folder as config.yml

# Build process
Each commit fires automated CI process in Azure DevOps. Status of each build can viewed from [Travis](https://travis-ci.org/PlatformOfTrust/developer.oftrust.net) 

