import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import lusca from "lusca";

import path from 'path';
import fs from 'fs';


import * as rp from "request-promise";
import * as errors from "request-promise/errors";

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.get('/api/posts', getAllPosts)

app.get('/*', (req: Request, res: Response) => {
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });



/**
 * Data Fetching
 */
const getAllPosts = (req, res) => {
    rp.get("http://jsonplaceholder.typicode.com/posts")
    .then(data => { res.send(data) ;})
    .catch(errors.StatusCodeError, (reason) => {
        // The server responded with a status codes other than 2xx.
            // There is an issue on Domio's end
                // We missed a fetch cycle!
    })
    .catch(errors.RequestError,  (reason) => {
        // The request failed due to technical reasons.
            // This is probably a network error on our end
                // We missed a fetch cycle!

    });
};

export default app;
