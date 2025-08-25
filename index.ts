import Express from "express";
import router from "./routes";
import {fileURLToPath} from "node:url";
import path from "node:path";

const app = Express();
const PORT = 3000;

//Détermine l'eemplcement du fichier index 
const _filename = fileURLToPath(import.meta.url);
//Détermine l'emplacement du dossier parrent 
const _dirname = path.dirname(_filename); 

//Utilise EJS comme moteur de vues 
app.set("view engine", "ejs");
//Indique l'emplacement des vues 
app.set("views", path.join(_dirname, "views"));
//Indique l'emplacement des fichiers statics 
app.use(Express.static(path.join(_dirname, "public")));
//Permet la transmission des formulaires
app.use(Express.urlencoded({extended: true}))

app.use("/", router); 

//Launch app and listen to the specified port
app.listen(PORT, () => {
    console.log(`Currently running on PORT ${PORT}`);
});