---
path: "/developers/getstarted/data-products"
date: "2019-01-15T13:30:33.962Z"
title: "Create data products"
image: ./rush.jpeg
type: "page"
---
Creating data products on Platform of trust...


# What data is available and why is it published? 

You might be tempted to jump directly to technical integration, but think about the business reasons first. First you need to find out what data is available in the source system. On top of that you need to have a reason why it is published. If you act on behalf of another company and your task is to setup technical facilities for the data product, discuss with your client. Questions which normally needs to be answered before proceeding: 

* What data is available?
* Why that data would be published via Platform of Trust (business reasons)
* Who are the expected consumers? 
* What are the use cases for the data? 

Use business model canvas or similar to iterate business reasons and other aspects if needed. 

# How do we get access to desired data? 

How data is accessed? Where's the API (if there is), documentation, credentials needed. This API refers to data integration API, not to the data consumer API which is used by the 3rd party developer. Your about to start building translator component or functionality between the raw data source system and Platform of Trust. 

IMAGE HERE ABOUT APIS REFERRED

Notice that we expect raw data provider to have beta API environment which can be used in the Platform of Trust environment. Beta API is used in testing the data product before launch. The consuming developer will access the data with help of Platform of Trust Data Broker API, which in turn calls translator component and that handles calls to raw data system. Beta API is also expected to stay available after data product release since 3rd party developers will use it while developing applications instead of calling your production API. 

# Get familiar with Platform of Trust ontology

Local data most likely uses different names for data attributes. If you haven't done data integration before, use good amount of time in this step. It will pay back later and reduce refactoring and wasted resources.

You need to be familiar with the ontology to harmonize source system data fields to standard formats used in Platform of Trust. With harmonized ontology and semantics we can be sure that everyone understands the content similar way. 


# Start building translator functionality

You can use open source python skeleton provided by Platform of Trust, which can be downloaded from Github. Another popular option is the use integration platform if you happen to have one. Currently Tunninen Oy provides Platform of Trust compatible integration platform, which enables fast way to integrate your raw data to Platform of Trust. We expect and welcome more integration providers to join Platform of Trust ecosystem. 

Build the transformation rules between raw data response and what Platform of Trust ontology expects. 

**Simple Python Example here as code**

You can find more examples in Github. 


# Register translator to Platform of Trust

You can register the translator with Product API (see documentation). You can set the beta API and production API configuration separately or all at ones. 

Here's an example how you would add just Translator's beta API environment configuration to Platform of Trust. 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
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




Here's an example in which both environments are configured with one API POST method: 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
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


You can find further details details and other options from Product API documentation. If you have found a bug or have a feature request for Product API, create an issue in Github (link here).

IN THE FUTURE:
Go to Developer Portal ("For Developers" in platformoftrust.net and select "Register Translator". Fill in the name, description, set status to "testing" and visibility to private or organisation. If you select organisation, others in your organisation will be able to see the translator and use it in other data products. 

 

# Create data product in Platform of Trust

You can create the data product with Product API (see documentation). An example: 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
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
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 

  -d
    {"paramaters": {
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

# Test the data product 

Use Platform of Trust Data Broker API to test your data product. An example: 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
  -X POST \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 
```

See API documentation for details. 

# Publish data product 

So far you have been using beta (source API) and sandbox environment. Before publishing the Data product you need to set the production configuration if you haven't done it before. You also need to set the visibility to "public" and status to "production". 

Here's a simple curl example how you configure production environment for the data product with Product API: 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
  -X GET \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 
```


You can set the publicity and status with below Product API call: 

```
# Notice the sandbox URL, change to production when needed. 
curl "http://sandbox.oftrust.net/api/translator/fetch" \
  -X GET \
  -H "X-PoT-Signature: xxx" \
  -H "X-PoT-Token: meowmeowmeow" \
  -H "X-PoT-App: xxx" 
```

