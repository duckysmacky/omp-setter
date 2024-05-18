#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");

async function getProfile() {
    return new Promise((resolve, reject) => {
        exec("$PROFILE", {shell: "powershell.exe"}, (error, stdout, stderr) => {
            if (error) {
                console.error(`An error has occured getting $PROFILE path: ${error.name} (code : ${error.code})`);
                process.exit(1);
            }
            
            resolve(stdout.trim());
        });
    });
}

async function applyProfile() {
    return new Promise((resolve, reject) => {
        exec("& $PROFILE", {shell: "powershell.exe"}, (error, stdout, stderr) => {
            if (stderr) reject(stderr);
            resolve("Applied profile!");
        });
    });
}

async function setTheme(theme) {
    var path = await getProfile();
    var profile = fs.readFileSync(path, "utf8");

    profile = profile.replace(/themes\\.*.omp/, `themes\\${theme}.omp`);

    fs.writeFileSync(path, profile);

    // console.log(await applyProfile());
    // console.log(profile);
}

var theme = process.argv[2];

if (!theme) {
    console.error("Error: theme not specified!");
    console.log("Usage: omptheme <theme name>");
    process.exit(1);
}

setTheme(theme);