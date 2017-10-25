const firebase = require("firebase");
require("firebase/firestore");

export { default as TransmuteFramework } from "transmute-framework";

export const transmuteConfig = {
  providerUrl: "https://testrpc.azurewebsites.net",
  ipfsConfig: {
    host: "ipfs.infura.io",
    port: "5001",
    options: {
      protocol: "https"
    }
  },
  aca: require("./contracts/RBAC.json"),
  esa: require("./contracts/RBACEventStore.json"),
  esfa: require("./contracts/RBACEventStoreFactory.json"),
  TRANSMUTE_API_ROOT: "https://us-central1-transmute-framework.cloudfunctions.net",
  firebaseApp: firebase.initializeApp({
    apiKey: "AIzaSyAz5HkV4suTR49_1Cj40bQYd9Jgiv634qQ",
    authDomain: "transmute-framework.firebaseapp.com",
    databaseURL: "https://transmute-framework.firebaseio.com",
    projectId: "transmute-framework",
    storageBucket: "transmute-framework.appspot.com",
    messagingSenderId: "191884578641"
  })
};
