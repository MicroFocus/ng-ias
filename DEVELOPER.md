# Setting up the Developer Environment

1. Clone the repository and install packages via NPM

       git clone git@github.com:jedwardhawkins/ng-ias.git
       npm install -g gulp-cli
       npm install

2. Build the project

       ~/ng-ias# gulp
   
   In a new terminal:

       ~/ng-ias# cd docs
       ~/ng-ias/docs# gulp

3. Navigate to localhost:8080 to view the application.

## Build Command Explanation

This project uses [gulp.js](https://gulpjs.com/) and 
[ng-gulp](https://github.com/jedwardhawkins/ng-gulp) to build ng-ias as well as the documentation
site for it. Running gulp tasks from the project root builds ng-ias. Running gulp tasks from
`/docs` inside the project root builds the documentation site for ng-ias, which can be viewed on
localhost:8080. Running `gulp` builds and serves the given application, watching the files for 
changes and recompiling as necessary. (This command doesn't serve ng-ias since it does not have 
any content to be served.) For a one-time build, run `gulp build:production`. To simply serve 
files, run `gulp serve:production`.
