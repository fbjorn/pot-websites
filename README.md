
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

## FrontEnds with Gatsby/GraphQL React 

* Clone repository to local machine with 
* ``git clone git@github.com:PlatformOfTrust/pot-websites.git``
* ``cd developer-site or marketing-site``
* ``npm install``
* ``npm install --global gatsby-cli``
* ``gatsby develop -o -p 8000``
* Site will open in browser localhost:8000, use -p to change port

## FrontEnd build for release2 marketing-site 

* Clone repository to local machine with 
* ``git clone git@github.com:PlatformOfTrust/pot-websites.git``
* ``cd pot-websites`` 
* ``cd marketing-site``
* ``git checkout marketing-site/release2`` 
* Create file `.npmrc` and add lines: 

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE
```

* ``npm install``
* ``npm install --global gatsby-cli``
* ``gatsby develop``
* Site will open in browser localhost:8000, use -p to change port
* (build gives some error, don't mind them, gatsby and mdx will fix them later)

## CMS 
Netlify CMS is used for content creation (GUI). All content is stored in Github as markup files. Netlify GUI requires Github account and is run from files in /cmsadmin. Netlify configuration is in same folder as config.yml

# Build process
Each commit fires automated CI process in Azure DevOps. Status of each build can viewed from [Travis](https://travis-ci.org/PlatformOfTrust/developer.oftrust.net) 

