# Simple as:

`git clone git@github.com:PlatformOfTrust/pot-websites.git`

`cd pot-websites`

`cd marketing-site`

`git checkout marketing-site/release2`

Create file `.npmrc.txt` and add token

`@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_TOKEN_HERE` 

(fort awesome isn't mistyped...)

install all

`npm i`

if you don't already have gatsby-cli, install it 
`npm install --global gatsby-cli`

Run project in dev mode by 

`gatsby develop` or if you wat to auto open it in certain port like 8001 `gatsby develop -o -p 8001`

(build gives some error, don't mind them, gatsby and mdx will fix them later)
