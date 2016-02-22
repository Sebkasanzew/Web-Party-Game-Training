# Setup instructions for Browser-sync
1. download and install NodeJS Stable from [https://nodejs.org/en/download/stable/](https://nodejs.org/en/download/stable/)
2. download and install the latest Python 2 from [https://www.python.org/downloads/](https://www.python.org/downloads/)
    1. during the installation, make sure to add Python to PATH
3. open the command prompt (cmd.exe on Windows, or "Terminal" in JetBrains IDE)
4. create a folder "playground" in the repository and switch to it with "cd playground"
5. type "npm init" in the terminal and follow the instructions to create a "package.json"-file
5. type "npm install browser-sync gulp --save-dev"
    1. npm - is the package manager form NodeJS
    2. install - is the command to install packages on your system
    3. "browser-sync", "gulp" - are packages we need to develop faster :)
    4. --save-dev - is a command that updates the "package.json"-file in our project to tell other developers, which packages are used. Everybody who pulls this project can type "npm install" in the terminal and will install all package dependencies automatically
6.
