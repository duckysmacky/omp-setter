const { exec } = require("child_process");

function getProfile(_callback) {
    exec("$PROFILE", {"shell": "powershell.exe"}, (error, stdout, stderr) => {
        if (error) {
            console.log(`An error has occured getting $PROFILE path: ${error.name} (code : ${error.code})`);
            process.exit(1);
        }
    
        _callback(stdout.trim());
    });
}

getProfile((profile) => console.log(profile));