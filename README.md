# ng-mfux

The NG-MFUX project is a set of reusable widgets for Angular.js 1.x. These widgets provide a consistent look and feel across products as well as functionality that provides product consistency.  

## Usage

These steps outline how to use NG-MFUX in your project.

### Installation

The first step is to add the NG-MFUX code to your project.  You can clone the code from Git or add the code as a dependency for WebPack in your package.json like this:

```
"dependencies": {
    "mf-icons": "git+https://secmgmtgit.provo.novell.com:8443/scm/~jhawkins/mf-icons.git",
    "ng-mfux": "git+https://secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ng-mfux.git"
}
```

This will bring in the icons projects, which includes icons and CSS, and the MFUX project which includes the widgets.  

Once you have added these project dependencies you can add the NG-MFUX library to your Angular project by adding the following to your application HTML page:

```
<link href="node_modules/mf-icons/dist/mf-icons.css" rel="stylesheet">
<link href="dist/ng-mfux.css" rel="stylesheet">
<script src="dist/ng-mfux.js">
```

...and the following module dependency to your Angular app declaration:

`angular.module('app', ['ng-mfux'])`
 
After this initial setup you can copy code/examples from the [docs app](#DocsApp) into your project.
 
## Development

The first step to building the NG-MFUX library locally is to clone it with a command like this:

`git clone https://ZGrossbart@secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ng-mfux.git`

Make sure to get the command from the BitBucket server since it is specific to you.

Once you have cloned the project you need to install the build tools. The NG-MFUX project builds with gulp.js so the first step is to use NPM to install gulp.js like this

`npm install -g gulp-cli`

Once gulp.js is installed use these commands to add all of the other project dependencies locally:

```
cd ng-mfux
npm install
```

These two steps are only needed the first time you set up your development environment.

### Development Toolchain

Once you have completed the initial setup you are ready to build and run locally.  First build the core project with the following command:

`gulp build:development`

Then start the development environment for the core with this command:
`gulp`

This service does not start a server, it just makes changes in the core available to the browser in development mode.  NG-MFUX contains a second project named docs which includes interactive examples of all of the widgets.  This project is where you will see and test your changes.

To start the docs app open a second terminal and go to your NG-MFUX working copy.  Then run the following commands:

```
cd docs/
gulp
```

Now you have started the docs app and a listener service to update changes from the core project.  View your local build at [localhost:8081](http://localhost:8081).


### Production builds

Before committing any changes you must run the production build to update the files in the `dist` directory.  Stop all instances of gulp.js and run the following commands from the root of the project:

```
gulp build:production
cd docs
gulp build:production
```