# Transmute dApp

https://dapp.transmute.industries/

This firebase application was built with the Transmute CLI and Framework.

## Depenencies

- [Latest Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Firebase](https://firebase.google.com)

## Getting Started

### Git & Docker

```
$ git clone https://github.com/transmute-industries/transmute-dapp.git
```

### Update Configurations

#### functions/.transmute

- Maybe create a project on [firebase.google.com](https://firebase.google.com/)
- Add/Update `firebase-service-account.json`
- Add/Update `firebase-client-config.json`
- Update `environment.secret.env`
- Update `environment.node` & `environment.web`

#### dapp/src/environment.web.ts

- Update to use your `firebase-client-config.json`

### Run the dApp!
```
$ docker-compose up
```
