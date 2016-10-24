# P5-Neighborhood-Map

To view use: <https://github.com/WBW462/frontend-nanodegree-neighborhood-map>

This is a single-page application featuring a map of selected venues in and about Anchorage, Alaska. Included in this application are map markers for each venue, a search function to easily find these venues on the map and a list to filter thru the various venues.

# To Run

1. Download or fork the application from: <https://github.com/WBW462/frontend-nanodegree-neighborhood-map>
2. Select index.html to start the app

# ABOUT

Front-End Web Developer Nanodegree Neighborhood Map, is a project within the Udacity Front-End Web Developer Nanodegree. In this project, I developed a single-page application featuring a map of a neighborhood or a neighborhood to visit.  Additional functionality is added, to include map markers to identify popular venues or places you'd like to visit, a search function makes it easy to discover these venues.  Third-party APIs have been implemented to provide additional information about each venue.  In this version of Neighborhood Map, Wikipedia has been added as a third-party API as well as Google Maps.

# INSTALLATION:

In order to run the source files (to compress and minify the files) you will need to ensure the following programs are installed:

_**Node.js:**_

This can be downloaded from <https://nodejs.org/>. This self-installing package is self-explanatory.

_**npm:**_

The best way to install npm is to install node using the node.js installer, npm is installed as part of node. It will give you a recent, working version of npm with all the paths in the expected places. This is the version that npm Inc and the Node.js project both support. Once you've installed Node.js, you can make sure you've got the very most recent version of npm using npm itself:

`npm install npm -g`

This is done on a Windows machine by entering `cmd` into the search window and using the **Command Prompt** window that opens. Make sure to run it as administrator (Ctrl+Shift+Enter).

_**Grunt:**_

Using the Command Prompt window, navigate to the the project source folder and install Grunt by running:

`npm install -g grunt-cli`

After installing grunt-cli, you will need to install Grunt and the following plugins:

`npm install grunt --save-dev`

`grunt-contrib-cssmin --save-dev`

`grunt-contrib-uglify --save-dev`

Using `--save-dev` will not only install the modules locally, but will also be added to the devDependencies section.

**NOTE**--the **dist (folder)** is created when Grunt is run in the Command Prompt window and is not an original source folder. Running Grunt processes the code in the Gruntfile, using the Grunt packages in the package.json file. These packages are installed after installing grunt-cli, see above, INSTALLATION: Grunt. Gruntfile.js and package.json are also not original source files. These files with the **dist (folder)** were created to created to meet specifications for this project.

Additionally, you will need some sort of server software on your computer to fully test this . This is necessary to test the index.html file.  I used Fenix and this can be found and downloaded at http://fenixwebserver.com/.

# VIEWING:

To use the application

1. Use the filter box to filter list items.
2. As you hover over the listed venues, the listed venue will pulsating between light and dark blue.
3. Select a listed venue or map marker to open an info window describing the venue.
4. When a venue has been selected, from the venue list, that venue will pulse between green and blue, while the green map marker remains in place for about 14 seconds and then the green map marker will return to the normal default maker and the listed venue selected will remain green until a new venue has been selected.

If you are using a mobile device, you can click the hamburger menu to show the list of venues.

To view on your computer open the index.html file. PageSpeed scores can be viewed by entering url provide by running ngrok.exe at <https://developers.google.com/speed/pagespeed/insights/>. 60 FPS improvements can be view by using Chrome Dev Timeline Tool.

# OPTIMIZATIONS:

Indentified and performed optimizations to achieve a PageSpeed score above 90 for Mobile and Desktop:

Created async script requests in the index.html.  Minified CSS and JS. Used JavaScript to load resources after the DOM has completely loaded.

Researched, identified and used grunt to automatically perform optimization of CSS and JS. Used grunt-contrib-cssmin to minify css and grunt-contrib-uglify to minify js.

# MORE INFORMATION:
