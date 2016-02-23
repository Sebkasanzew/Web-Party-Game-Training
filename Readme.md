# Setup instructions for [Browser-sync](https://www.browsersync.io/) and Gulp
1. download and install NodeJS Stable from [https://nodejs.org/en/download/stable/](https://nodejs.org/en/download/stable/)
2. download and install the latest Python 2 from [https://www.python.org/downloads/](https://www.python.org/downloads/)
    1. during the installation, make sure to add Python to PATH
3. on Windows you need the Windows SDK that can be installed together with Visual Studio 2015 Community Edition
    1. if you already installed VS2015 previously, than go to "Programs and Features" in the Control Panel and "modify" your VS2015 installation
    2. but maybe it works also without the Windows SDK... you will just get some errors during the following commands
4. open the Terminal in JetBrains IDE
5. create a folder "playground" in the repository and switch to it with "cd playground"
6. type "npm init" in the terminal and follow the instructions to create a "package.json"-file
    1. "test" you can leave blank
    2. for "repository" you can add the URL of this repository
    3. basically everything is optional... you can read about the package.json file [here](https://docs.npmjs.com/files/package.json)
7. type "npm install browser-sync gulp --save-dev"
    1. npm - is the package manager from NodeJS (Node Package Manager)
    2. install - is the command to install packages on your system
    3. "browser-sync", "gulp" - are packages we need to develop faster :)
    4. --save-dev - is a command that updates the "package.json"-file in our project to tell other developers, which packages are used. Everybody who pulls this project can type "npm install" in the terminal and will install all package dependencies automatically
8. 
