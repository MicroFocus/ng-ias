# ng-ias

The NG-IAS project is a set of reusable widgets for Angular.js 1.x. These widgets provide a consistent look and feel across products as well as functionality that provides product consistency.  

## Usage

These steps outline how to use NG-IAS in your project.

### Installation

The first step is to add the NG-IAS code to your project.  You can clone the code from Git or add the code as a dependency for WebPack in your package.json like this:

```
"dependencies": {
    "ias-icons": "git+https://secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ias-icons.git",
    "ng-ias": "git+https://secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ng-ias.git"
}
```

This will bring in the icons projects, which includes icons and CSS, and the NG-IAS project which includes the widgets.  

Once you have added these project dependencies you can add the NG-IAS library to your Angular project by adding the following to your application HTML page:

```
<link href="node_modules/ias-icons/dist/ias-icons.css" rel="stylesheet">
<link href="dist/ng-ias.css" rel="stylesheet">
<script src="dist/ng-ias.js">
```

...and the following module dependency to your Angular app declaration:

`angular.module('app', ['ng-ias'])`
 
After this initial setup you can copy code/examples from the [docs app](#DocsApp) into your project.
 
## Development

1. Clone the ng-ias repository. Get the appropriate url from the BitBucket server since it is specific to you. You can find it by clicking on the "Clone" action in the left toolbar of this project. Use that url in the command below: 

`git clone https://YourUsername@secmgmtgit.provo.novell.com:8443/scm/~jhawkins/ng-ias.git`

2. Install the build tools. The ng-ias project uses gulp.js, which can be installed as follows:

`npm install -g gulp-cli`

3. Install the [BitBucket server certificate](https://wiki.provo.microfocus.com:8443/download/attachments/32741329/secmgmtgit.provo.novell.com.pem.txt), if you have not done so already. Download it, then run the command below. More information can be found on the [company wiki](https://wiki.provo.microfocus.com:8443/display/ENG/Bitbucket+Server+-+Getting+Started). 

`git config --global http."https://secmgmtgit.provo.novell.com:8443/".sslCAInfo path/to/cert.pem`

4. Install the project dependencies:

```
cd ng-ias
npm install
```

### Development Toolchain

Once you have completed the initial setup you are ready to build and run locally.  First build the core project with the following command:

`gulp build:development`

Then start the development environment for the core with this command:
`gulp`

This service does not start a server, it just makes changes in the core available to the browser in development mode.  NG-IAS contains a second project named docs which includes interactive examples of all of the widgets.  This project is where you will see and test your changes.

To start the docs app open a second terminal and go to your NG-IAS working copy.  Then run the following commands:

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