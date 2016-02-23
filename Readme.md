# Setup instructions for [Browser-sync](https://www.browsersync.io/)
1. download and install NodeJS Stable from [https://nodejs.org/en/download/stable/](https://nodejs.org/en/download/stable/)
2. download and install the latest Python 2 from [https://www.python.org/downloads/](https://www.python.org/downloads/)
    1. during the installation, make sure to add Python to PATH
3. on Windows you need the Windows SDK (for some browser-sync features) that can be installed together with Visual Studio 2015 Community Edition
    1. if you already installed VS2015 previously, than go to "Programs and Features" in the Control Panel and "modify" your VS2015 installation
    2. but maybe it works also without the Windows SDK... you will just get some errors during the following commands
4. open the Terminal in the JetBrains IDE
5. switch to the playground folder with "cd playground"
6. download jQuery from [http://code.jquery.com/jquery-2.2.1.min.js](http://code.jquery.com/jquery-2.2.1.min.js) and save it in the js-folder
7. type "npm install browser-sync -g"
    1. npm - is the package manager form NodeJS
    2. install - is the command to install packages on your system
    3. "browser-sync" - is a packages we need to develop faster :)
    4. -g - means that it is installed globally on your system and can be used independently from the project
8. now you can type 'browser-sync start --server --files "css/\*.css, \*.html, js/\*.js"' in the terminal and your default browser will open your index.html
    1. start - the command to start the service
    2. --server - tell browser-sync to start a server from the current directory
    3. --files - defines the files that will be watched by browser-sync... if they change, the browser will update the page
    4. read more about the capabilities of Browser-sync [here](https://www.browsersync.io/)
    
# Tasks
Read the tasks in index.html, css/main.css and js/main.js carefully
