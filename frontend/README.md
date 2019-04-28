Installation
-------------
Run "npm install" to install dependencies

Running
-------------
Run dev version: $ npm run dev
Build prod version: $ npm run build
Start built prod version: $ npm run start
Export to static files: $ npm run export

Deployment
-------------
Circle CI, on a successful master build, exports the project to static files and
pushes them to the 'gh-pages' branch, where they are picked up by GitHub Pages.
 