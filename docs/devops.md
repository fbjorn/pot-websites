# Build pipeline

- frontend code is compiled via some e.g. `npm` or `bash` based toolchain (`npm build --production` or `./build.sh` or similar), and if possible have also unit tests (`npm test` or `./test.sh` or similar)
- the compiled frontend code is deployed to an Alpine Linux container with the Nginx configuration
- the backend would be python bottle/node depending on how much help you want from the rest of the team (we code backends in Python), and what you're familiar with
- the backend would be deployed similarly on Alpine Linux containers with a `Dockerfile` containing the rules for building the container
- deployment to production should be done automatically for all commits (PR merges) to `master` branch that pass the tests
- depending on what is deemed most helpful we can have the code for them in GitHub/Azure DevOps, automated tests on Travis/Azure DevOps, builds on Travis/Azure DevOps, and deployment logic on Azure DevOps

