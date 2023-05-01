# NETFLIX-MERN
A Netlfix clone where Users can get authenticated to watch Movies, Series of the different genres available in the list category. The Admin can add Movies, and Series and can categorise them in different lists. All the CRUD operations on Users, Movies/Series, and Lists have been implemented using REST APIS.

## 🚀 Architecture Diagram
![Netflix Mern](https://user-images.githubusercontent.com/104893311/235288616-09f182c1-4a09-4985-8726-dd3058de095f.png)

## 🚀Getting Started

- In the terminal, run: ```https://github.com/Syed007Hassan/NETFLIX-MERN.git```

- Create a ```api/.env``` file that contains 
```
MONGOATLASPASWORD=

PORT=3001

MONGOURL=

SECRET_KEY_FOR_CRYPTOJS=
```
- Create a ```admin/.env``` file that contains 
```
PORT=5000
```
- Create a ```admin/src/firebase.js```  that contains

```
import firebase from "firebase";
//replace your keys
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

```

- In the first terminal, run: ```cd api && npm i```, then run: ```node start``` 

- In the second terminal, run: ```cd client && npm i```, then run: ```npm run start``` 

- In the third terminal, run: ```cd admin && npm i```, then run: ```npm run start```

- Client(Netflix) will be available on ```http://localhost:3000/``` and Admin(Neflix Panel) will be available on ```http://localhost:3001/```

## 🚀 Technologies used 
- ReactJS: For client side
- NodeJs: For creating REST APIS and handling database 
- Jest: For testing APIS and mocking database
- MongoDB: For performing CRUD operations on launches and planets data
- Dockers: For containerizing application
- Github Actions: For creating a CI/CD pipeline 

## 🚀 Demo 

