
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = { // add your abase c 
    apiKey: "AIzaSyCIKScTRNzQEfqrMSer_Yq6R1rjXE8kEcw",
    authDomain: "guildqb-1b317.firebaseapp.com",
    projectId: "guildqb-1b317", 
    storageBucket: "guildqb-1b317.appspot.com", 
    messagingSenderld: "238070083019", 
    appId: "1:238070083019:web:cbe307a016424802b29a4e"
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app); 
