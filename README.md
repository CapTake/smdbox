# SMD BOX

SMD Box is UI for human-readable displaying of JSON-RPC SMD schemas from remote url, allowing you to call RPC methods live, view and log results.

## Getting started

* Run:
    * `yarn run dev` — watches the project with continuous rebuild at localhost:4500
    * `yarn run prod` — builds minified project for production
    * `yarn run dist` — same as 'prod', but assets are made without hash (e.g. for deploys from github)
    * `yarn run clean` — clean production assets
    * `node index` - runs test smd schema server on localhost:8082/test (use as smd url in settings)
* Setup your project - set smd-scheme url, your custom headers, and rpc url (Later you can change those params in Setting window)

When project is set up you're able to choose methods from list at left sidebar, view method's description, it's input and output params, and run selected method on remote server to see results.

History of successfull calls and their input/output are shown in "History" window (click History at top navigation). 
