
export class LocalStorageHelper {

    private static TOKEN = "authToken";


    static storeUserDetails(data) {
        LocalStorageHelper.setToken(data.token);
        LocalStorageHelper.storeData("user",data.data);
    }
    static setToken(token) {
        localStorage.setItem(LocalStorageHelper.TOKEN, token);
    }
    static getToken() {
        localStorage.getItem(LocalStorageHelper.TOKEN);
    }
    static clearToken() {
        localStorage.removeItem(LocalStorageHelper.TOKEN);
    }
    static storeData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static fetchData(key) {
        let data = localStorage.getItem(key);
        if (data) {
            return  JSON.parse(data);
        } else {
            return null;
        }
    }

    static clear(key) {
        localStorage.removeItem(key);
    }
}