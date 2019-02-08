---
path: "/developers/getstarted/data-products"
date: "2019-01-15T13:30:33.962Z"
title: "Create data products"

type: "page"
---
This guide will help you create a data product in the Platform of Trust market place for other developers to utilize in applications. 

# What is data product and translator? 

Data product is the final product which 3rd party developers can find from Platform of Trust market place.  3rd party developers always use Data Broker API to access data product data. Translator connects the raw data source to the data product and translates the data model to standard format.

IMAGE HERE

Phases included in the process: 

![Data product creation phases](data-product-process.png)




# 1. What data is available and why is it published? 

You might be tempted to jump directly to technical integration, but think about the business reasons first. First you need to find out what data is available in the source system. On top of that you need to have a reason why it is published. If you act on behalf of another company and your task is to setup technical facilities for the data product, discuss with your client. Questions which normally needs to be answered before proceeding: 

* What data is available?
* Why that data would be published via Platform of Trust (business reasons)
* Who are the expected consumers? 
* What are the use cases for the data? 

Use business model canvas or similar to iterate business reasons and other aspects if needed. 

## How do we get access to desired data? 

How data is accessed? Where's the API (if there is), documentation, credentials needed. This API refers to data integration API, not to the data consumer API which is used by the 3rd party developer. Your about to start building translator component or functionality between the raw data source system and Platform of Trust. 

IMAGE HERE ABOUT APIS REFERRED

Notice that we expect raw data provider to have beta API environment which can be used in the Platform of Trust environment. Beta API is used in testing the data product before launch. The consuming developer will access the data with help of Platform of Trust Data Broker API, which in turn calls translator component and that handles calls to raw data system. Beta API is also expected to stay available after data product release since 3rd party developers will use it while developing applications instead of calling your production API. 

## Get familiar with Platform of Trust ontology

Local data most likely uses different names for data attributes. If you haven't done data integration before, use good amount of time in this step. It will pay back later and reduce refactoring and wasted resources.

You need to be familiar with the ontology to harmonize source system data fields to standard formats used in Platform of Trust. With harmonized ontology and semantics we can be sure that everyone understands the content similar way. 


# 2. Deploy the translator 

Translator transforms the local data model and attributes to match Platform of Trust defined ontology upon Data Broker API call. Every time 3rd party developer uses the data product attached to translator, API included in the translator is fired. In other words Platform of Trust does not store or cache the data content anywhere.  

Currently you have two options. 
* You can use open source python skeleton provided by Platform of Trust, which can be downloaded from [Github](https://github.com/PlatformOfTrust/translator-skeleton-python). With this option you need to deploy the code your self eg use own servers or some cloud provider. This might require more work from you. [See the more detailed example and description of using Translator skeleton](/developers/getstarted/translator).
* Another popular option is the use integration platform if you happen to have one. Currently Tunninen Oy provides Platform of Trust compatible integration platform, which enables fast way to integrate your raw data to Platform of Trust. We expect and welcome more integration providers to join Platform of Trust ecosystem. 



## Register translator to Platform of Trust

You can register the translator with Product API (see documentation). You can set the beta API and production API configuration separately or all at ones. 

Here's an example how you would add just Translator's beta API environment configuration to Platform of Trust. 

```

curl "http://api.oftrust.net/product/" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"translator": {
        "name": "Just a name",
        "desc": "Short description",
        "visibility": "organisation",
        "status": "testing",  
        "configuration": {
            "testing": {
            "url": "https://0.0.0.0" 
        }
    }}
```
In case of success (200), you will get a response body similar to this: 

```json
{"translator": {
  "translator_id": "0001002202010ERQ123", // given by core platform
  "name": "Just a name",
  "desc": "Short description",
  "visibility": "organisation",
  "status": "testing",
  "org_id": "pot org id", // given by core platform
  "user_id": "pot user id", // given by core platform
  "modified": "1997-07-16T19:20:30.45+01:00",
  "created": "1997-07-16T19:20:30.45+01:00", 
  "configuration": {
    "testing": {
      "url": "https://0.0.0.0" 
    },
    "production": {
      "url": "" 
    }
  }
}}

```


Here's an example in which both environments are configured with one API POST method: 

```

curl "http://api.oftrust.net/product/" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"translator": {
        "name": "Just a name",
        "desc": "Short description"
         "configuration": {
            "testing": {
                "url": "https://0.0.0.0" 
            },
            "production": {
                "url": "https://0.0.0.0" 
            }
        }
    }}
```

In case of success (200), you will get a response similar to this: 

```
{
  "id": 2
}
```


You can find further details details and other options from Product API documentation. If you have found a bug or have a feature request for Product API, create an issue in Github (link here).
 

# 4. Create data product in Platform of Trust

You can create the data product with Product API (see documentation). An example: 

```

curl "http://api.oftrust.net/product/" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"translator": {
        "name": "Just a name",
        "desc": "Short description"
    }}
```

In case of success (200), you will get a response similar to this: 

```
{
  "id": 2
}
```


Set the available paramaters for 3rd party data consumer. The options are shown in market place for the 3rd party developer. 
```

curl "http://api.oftrust.net/product/" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"parameters": {
        ....
    }}
```

In case of success (200), you will get a response similar to this: 

```
{
  "id": 2
}
```

You can find further details details and other options from Product API documentation. If you have found a bug or have a feature request for Product API, create an issue in Github (link here).

IN THE FUTURE:
Go to Developer Portal ("For Developers" in platformoftrust.net and select "Create Data Product". Fill in the details such as name, description, set status to "testing" and publicity to "private" or "organisation". If you select organisation, others in your organisation will be able to see the data product, but it will not be published to 3rd parties in Market place.  

Select used translator from dropdown list. This is for example the one you created before or one created earlier by someone else. 

Define available parameters for 3rd party data consumer by picking the ones from list.  

## Test the data product 

Use Platform of Trust Data Broker API to test your data product. An example: 

```

curl "http://api.oftrust.net/translator/fetch" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 
```

See API documentation for details. 

## Set pricing and other product information


Minimum meta infromation requirements for published data product are: 
* Name
* Description
* Price
* Data license
* Logo (url)


You can configure the data product with Product API (see documentation). Here's an example to set minimum meta information. Since it's an update to existing data product, use **PUT** method: 

```

curl "http://api.oftrust.net/product/" \
  -X PUT \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"product": {
        "name" : "", 
        "price": "10",
        "description": "",
        "logo_url": "",
        "data_license": "" 
    }}
```

In case of success (200), you will get a response similar to this: 

```
{
  "id": 2
}
```


You can preview the data product in Platform of Trusta Market place and adjust the content and settings accordingly before publishing the product. 

## Publish data product 

So far you have been using beta (source API) and sandbox environment. Before publishing the Data product you need to set the production configuration if you haven't done it before. You also need to set the visibility to "public" and status to "production". 

Here's a simple curl example how you configure production environment for the data product with Product API. Since this is an update to existing data product, use **PUT** method: 

```

curl "http://api.oftrust.net/product/" \
  -X PUT \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"product": {
        "product_id": "ID",
        "configuration": {
            "production": {
                "url": "https://0.0.0.0" 
            }
        }
    }}
```


You can set the publicity and status with below Product API call. Since this is an update to existing data product, use **PUT** method: 

```
curl "http://api.oftrust.net/product/" \
  -X PUT \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"product": {
        "product_id": "ID",
        "visibility": "public",
        "status": "production"
    }}
```

## Update and unpublish 

You can always update product configuration and unpublish your data product with Product API. Check out the API Documentation for details. 