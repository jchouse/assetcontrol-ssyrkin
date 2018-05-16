### How to use
Below you will find some information how I did that.<br>
<br>
In fact, for such a modest application, we do not need a separate backend and modern micro service capabilities represent a lot of opportunities to do without it at all. We can use AWS, Google Cloud Services, or Firebase (as here). Even for a simple backend, we do not need an instance quite simply some lambda by AWS or Google functions. Here you can just put everything in the database from the FE application.<br>
<br>
So I created app with facebook/create-react-app and insert redux (it was possible without it here).<br>
<br>
In the code itself, you can see both higher-order components and usual components of the react, well, just component-functions.
<br>
For deploy to firebase I usually using travic-ci (config in roof directory). Or firebase tool with `firebase deploy` all examples of these files are in the code<br>
<br>
There is also an example of a test in the repository. But I did not fully cover the test task.

### How to use

#### for build
```
npm i
npm run build
```

#### for start local server
```
npm run start
```
and open in browser http://localhost:3000/

### On dev server
Here is https://assetcontrol-ssyrkin.firebaseapp.com

You should try open this link in two different browsers and try to add some event
