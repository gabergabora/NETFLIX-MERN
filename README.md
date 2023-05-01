# NETFLIX-MERN

![image](https://user-images.githubusercontent.com/104893311/235490257-3456ad1d-7b4f-40e6-9e48-f86fc84b2e3c.png)

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
- ReactJS: For client (Netflix) and admin (Netflix Admin Panel)
- CSS/SCSS: For styling components
- NodeJs: For creating REST APIS and handling database 
- JWT: For authentication and authorization of users/admins
- MongoDB: For performing CRUD operations on Movies/Series/List and storing documents of Users/Movies/List
- Firebase: For uploading images and video and 

## 🚀 Demo 
https://user-images.githubusercontent.com/104893311/235488580-bc574b3c-7097-485a-9f4f-c7e8b78d61bf.mp4





