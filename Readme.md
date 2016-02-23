# Setup instructions for Browser-sync
1. download and install NodeJS Stable from [https://nodejs.org/en/download/stable/](https://nodejs.org/en/download/stable/)
2. download and install the latest Python 2 from [https://www.python.org/downloads/](https://www.python.org/downloads/)
    1. during the installation, make sure to add Python to PATH
3. open the Terminal in the JetBrains IDE
4. switch to the playground folder with "cd playground"
5. download jQuery from [http://code.jquery.com/jquery-2.2.1.min.js](http://code.jquery.com/jquery-2.2.1.min.js) and save it in the js-folder
5. type "npm install browser-sync -g"
    1. npm - is the package manager form NodeJS
    2. install - is the command to install packages on your system
    3. "browser-sync" - is a packages we need to develop faster :)
    4. -g - is a command that updates the "package.json"-file in our project to tell other developers, which packages are used. Everybody who pulls this project can type "npm install" in the terminal and will install all package dependencies automatically
6. now you can type "browser-sync start --server --files "css/\*.css, \*.html, js/\*.js" in the terminal and your default browser will open your index.html
    1. read more about the capabilities of Browser-sync [here](https://www.browsersync.io/)
