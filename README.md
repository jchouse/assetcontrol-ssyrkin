Below you will find some information how I did that.<br>
<br>
In fact, for such a modest application, we do not need a separate backend and modern micro service capabilities represent a lot of opportunities to do without it at all. We can use AWS, Google Cloud Serveices, And Firebase (as here). Even for a simple backend, we do not need an instance quite simply some lambda by AWS or Google functions. Here you can just put everything in the database from the FE application.<br>
<br>
So I created app with facebook/create-react-app and insert redux (it was possible without it here).<br>
<br>
In the code itself, you can see both higher-order components and usual components of the react, well, just component-functions.
<br>
For deploy to firebase I using travic-ci (config in roof directory). Or you can start project localy just run 'npm run start' after installing all dependency by `npm i`<br>
