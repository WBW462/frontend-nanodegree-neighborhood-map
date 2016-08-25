# P5-Neighborhood-Map

To view use : <https://github.com/WBW462/frontend-nanodegree-neighborhood-map>

This is a single-page application featuring a map of selected venue in and about Anchorage, Alaska. Included in this application are map markers for each venue, a search function to easily find these venues on the map and a list to filter thru the various venues.

1. Download or fork the application from: <https://github.com/WBW462/frontend-nanodegree-neighborhood-map>
2. Select index.html to start the app

To use the application

1. Use the filter box to filter list items.
2. Select a list item or map marker to open an info window describing the venue.

If you are using a mobile device, you can click the hamburger menu to show the list of venues.

Resources used in the building of this app:

- reviewer comments
- forum people <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference> for CSS hints <http://www.w3schools.com/js/> for javascript help <http://knockoutjs.com/> reference and tutorials on knockout.js <https://developers.google.com/maps/?hl=en> on google maps

# ABOUT:

Front-End Web Developer Nanodegree Neighborhood Map, is a project within the Udacity Front-End Web Developer Nanodegree. In this project, I developed a single-page application featuring a map of a neighborhood or a neighborhood to visit.  Additional functionality is added, to include map markers to identify popular venues or places you'd like to visit, a search function makes it easy to discover these venues.  A third-party API has been implemented to provide additional information about each venue.  In this version of Neighborhood Map, Wikipedia has been added as a third-party API.

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

Additionally, you will need some sort of server software on your computer to fully test this . This is necessary to test the index.html file and the pizza.html file at <https://developers.google.com/speed/pagespeed/insights/>. In my case I am using Windows Internet Information Services, which may need to be turned on in your Window's machine along with ngrok, found at <https://ngrok.com/>. This Application (.exe) will be placed into your wwwroot folder. If the Windows Internet Information Services feature is properly turned on, the path will be **This PC > Local Disk (C:) > inetpub > wwwroot**. The directory structure should look something like this in your server folder for testing purposes:

_css (folder)_

_img (folder)_

_js (folder)_

_views (folder)_

_index (html)_

_ngrok (Application)_

_project-2048 (html)_

_project-mobile (html)_

_project-webperf (html)_

Your source folder directory structure should look something along the lines like this:

_css (folder)_

_dist (folder)_ <--see **NOTE** below

_img (folder)_

_js (folder)_

_views (folder)_

_Gruntfile (js)_ <--see **NOTE** below

_index (html)_

_package (json)_ <--see **NOTE** below

_project-2048 (html)_

_project-mobile (html)_

_project-webperf (html)_

**NOTE**--the **dist (folder)** is created when Grunt is run in the Command Prompt window and is not an original source folder. Running Grunt processes the code in the Gruntfile, using the Grunt packages in the package.json file. These packages are installed after installing grunt-cli, see above, INSTALLATION: Grunt. Gruntfile.js and package.json are also not original source files. These files with the **dist (folder)** were created to created to meet or exceed specifications for this project.

# VIEWING:

To view on your computer open the index.html file. PageSpeed scores can be viewed by entering url provide by running ngrok.exe at <https://developers.google.com/speed/pagespeed/insights/>. 60 FPS improvements can be view by using Chrome Dev Timeline Tool.

# OPTIMIZATIONS:

Indentified and performed optimizations to achieve a PageSpeed score above 90 for Mobile and Desktop:

Created async script requests in the index.html, project-2048.html, project-mobile.html and project-webperf.html files. Used specific media types such as print and media to strategically load our CSS. Base64 encode our resources such as fonts and images and embed the code inside the HTML, inlined CSS into the index.html. Minified CSS, HTML and JS. Used JavaScript to load resources after the DOM has completely loaded.

Researched, identified and used grunt to automatically perform optimization of CSS and JS and image optimizations. Used grunt-contrib-imagemin to minify source images, grunt-contrib-cssmin to minify css, grunt-contrib-uglify to minify js and grunt-contrib-html to minify html.

# MORE INFORMATION:

This work is of mine own, modifying provided assets and researching ideas and problems from other Udacity students and Udacity instructors in the discussion forums, and various websites, such as MDN, Google, Stack Overflow, JShint, etc.
