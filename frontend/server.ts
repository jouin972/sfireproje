import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const routes = [
  { path: '/es/*', view: 'es/index', bundle: require('./dist/server/es/main') },
  { path: '/hi/*', view: 'hi/index', bundle: require('./dist/server/hi/main') },
  { path: '/*', view: 'en/index', bundle: require('./dist/server/en/main') }
];

// Load your engine
app.engine('html', (filePath, options: any, callback) => {
  options.engine(filePath, { req: options.req, res: options.res }, callback);
});
app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
routes.forEach(route => {
  app.get(route.path, (req, res) => {
    res.render(route.view, {
      req,
      res,
      engine: ngExpressEngine({
        bootstrap: route.bundle.AppServerModuleNgFactory,
        providers: [provideModuleMap(route.bundle.LAZY_MODULE_MAP)]
      })
    });
  });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
