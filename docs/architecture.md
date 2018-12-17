## Architecture

- ``developer.oftrust.net`` hosting the HTML + JS + CSS via Nginx with caching enabled
- ``developer.oftrust.net/api`` for hosting the backend services for it, potentially with e.g. Varnish in front of it for intelligent caching where possible
- we currently have one HAProxy routing proxy set up for the whole platform and for the time being we could add the developers' front + backend apps' routing rules to it
- that backend would then communicate with other PoT APIs backend-backend
- frontend would only talk to it's own backend via the same domain etc. via relative paths if possible to remove need for CORS etc. things that tend to add more problems

![Diagram](https://raw.githubusercontent.com/PlatformOfTrust/developer.oftrust.net/master/docs/pot-developer-portal-architecture.png)
