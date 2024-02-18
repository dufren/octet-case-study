# JSON Server

This repository contains a simple JSON Server setup for your API needs. Please ensure that you are using version 0.17.4, as higher or lower versions are not supported. In particular, the v1-alpha version is not supported.

# How to Run

To run the JSON Server, follow these steps:

Install Node.js on your machine if you haven't already.

Open your terminal or command prompt.

Navigate to the project directory.

Run the following command to start the JSON Server:

```bash
npx json-server -p 3500 -w data/db.json
```
This command initializes the JSON Server on port 3500 and watches the db.json file for changes.

Your API will be accessible at http://localhost:3500.
