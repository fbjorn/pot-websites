---
path: "/developers/getstarted/build-apps"
date: "2019-01-15T13:30:33.962Z"
title: "Build apps"
image: ./rush.jpeg
type: "page"
---

**Note: KOJAMO CASE APP, link to source code if possible**


# Publish Application with 5 steps

![Application creation phases](app-process.png)

Some of the example code snippets (API invocations) use sandbox environment. 

# 1. Get started


# 2. Register Application 


# 3. Select Data Product to use

# 4. Develop and test in sandbox environment


If you need more data, then search for additional data products from the market place and repeat. 

# 5. Deploy and publish

Set the data product configuration in your application to ``production`` to use production environment data instead of sandbox data. 

Use Product API to define missing Application metadata. Required fields are: 
 - name
 - description
 - ....

 Publish your application with Product API by setting the ``publicity`` attribute to ``public``and ``status`` attribute to ``production``. Below is an example how to do that. Note that you need to change appID and....

 
```

curl "http://api.oftrust.net/product/translator" \
  -X PUT \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    ...
    }}
```
