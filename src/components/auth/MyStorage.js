import ChangePassword from "./ChangePassword";

class MyStorage {
    // the promise returned from sync function
    static syncPromise = null;
    // set item with the key
    static setItem(key: string, value: string): string;
    // get item with the key
    static getItem(key: string): string;
    // remove item with the key
    static removeItem(key: string): void;
    // clear out the storage
    static clear(): void;
    // If the storage operations are async(i.e AsyncStorage)
    // Then you need to sync those items into the memory in this method
    static sync(): Promise<void> {
        if (!MyStorage.syncPromise) {
            MyStorage.syncPromise = new Promise((res, rej) => {});
        }
        return MyStorage.syncPromise;
    }
}

export default MyStorage;