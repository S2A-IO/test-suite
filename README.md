# Setup instructions
Install packages

```
npm install
```

## Create the app user

### Windows

Generate user secret:

```
openssl rand -hex 64 > curi.s2a.io.key
```

Create the user:

```
& $Env:S2A_PATH\s2a --cmd=createappuserlocal --id=curi.s2a.io --clientKey=curi.s2a.io.key curi.s2a.io
```

## Setup the DB

### Windows

```
& $Env:S2A_PATH\s2a --cmd=exec --url=http://localhost:3000 --id=curi.s2a.io --clientKey=curi.s2a.io.key --buildArgs=build-args.json --actions=db/setup.src.json
```

## Setup for web development
Install for web development

### Windows

```
& $Env:S2A_PATH\s2a --cmd=install --url=http://localhost:3000 --id=curi.s2a.io --clientKey=curi.s2a.io.key --targetDirectory=.
```

## Setup for mobile development

### Android
Add the platform

```
npm run ionic cordova platform add android
```

Build for development

```
npm run start:android
```

Build for release

In ``build.json`` set the keystore passwords in both fields:

```
"storePassword": "",
"password": "",
```


```
npm run prod:android
```
