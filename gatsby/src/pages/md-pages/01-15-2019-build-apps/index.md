---
path: "/developers/getstarted/build-apps"
date: "2019-01-15T13:30:33.962Z"
title: "Build apps"
type: "page"
---

**Note: KOJAMO CASE APP, link to source code if possible**


# Publish Application with 5 steps

![Application creation phases](app-process.png)

Some of the example code snippets (API invocations) use sandbox environment. 

# 1. Get started

You might want to read [use case description of one application](/use-cases/build-application). 

Information and understanding you need to have in the process: 
- API keys
- Get familiar with the authentication process. That is described in [Documentation](https://docs.oftrust.net/#authentication)


You will develop your application is sandbox environment. At the end you will change to production enviroment and publish your application to market place. 

# 2. Register Application 

You need to register your application to the Platform of Trust to gain access to App keys needed in API calls. Below is an example Product API invocation. 

```
curl "http://api.oftrust.net/products/" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    ...
    }}
```


# 3. Select Data Product to use

Next you probably want to use some data products in the Platform of Trust. You can search the market place for products with Product API. Here's an example how to make simple search and what is the response: 

```
curl "http://api.oftrust.net/products/" \
  -X GET \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

```


More detailed description of options can be found from the [Product API documentation](https://docs.oftrust.net). 

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
