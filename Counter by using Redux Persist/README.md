# Redux Persist
Redux Persist is a library used in conjunction with Redux to manage and persist the state of a Redux store across browser sessions. Essentially, it helps maintain the Redux state even after a page refresh or when the user revisits the app.
## Introduction
    
Redux Persist is a library for managing and persisting the state of a Redux store across sessions. It saves the Redux state to a storage mechanism like localStorage or sessionStorage, allowing the state to be retained even after a page refresh or app restart. Configured with a persistConfig, Redux Persist wraps the Redux store and uses PersistGate to rehydrate the state from storage upon initialization. It also allows selective persistence, enabling you to choose which parts of the state to save. This ensures a seamless user experience by preserving important data between sessions.


## Redux Persist Advantages 
- Storage Mechanism : Redux Persist stores the Redux state in a storage mechanism, like localStorage or sessionStorage in the browser. You can also use other storage options like IndexedDB or custom storage engines.

- Configuration : You configure Redux Persist by setting up a persistConfig object, which specifies the key for storing the state and the storage engine to use. You also need to wrap your Redux store with a PersistStore and a PersistGate component.

- Persist and Rehydrate : When the Redux store is created, Redux Persist will save the state to the specified storage. Upon initialization, it rehydrates the store by loading the saved state from the storage back into Redux.

- Selective Persistence : You can specify which parts of the Redux state should be persisted. This is useful if you only want to save certain pieces of the state and not the entire store.


## Usage/Examples
Clone the project
```javascript
git clone / Download ZIP
```
Go to te project directory
```javascript
cd "Counter by using Redux Persist"
```
Install dependencies
```javascript
npm i 
```
Run the server
```javascript
npm run dev
```
