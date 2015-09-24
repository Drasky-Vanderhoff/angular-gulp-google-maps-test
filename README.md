# angular-gulp-google-maps-test

A combination of [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) + Google Maps Api using multiple 3rd party angular directives.

### Install

##### Install required tools `gulp` and `bower`:
```
npm install -g gulp bower
```

##### Run npm & bower
```
npm install // sudo if needed
bower install
```

##### Development Mode
```
gulp serve
```
This runs a [local hosting](localhost:3000) and [BrowserSync](localhost:3001)

With this you also have an external url that you can use for accesing via other devices.

##### Testing Modes
```gulp test``` runs BDD tests.

```gulp protractor``` runs E2E tests.

##### Building

Builds a production version that you can deploy for hosting :

```gulp build``` or just ```gulp``` 

The build is in ```/dist```, also you can remove it with ```gulp clean```

##### More info

For more information please refer to [generator-gulp-angular's user guide](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md)

##### Know Issue

Remember that is just a demo to show how to combine google maps and angular.

  + Markers won't mantain a new assigned position after being applied.
  + In some odd cases, the first marker that's being created will not be displayed. Be sure to be precise with the name of the place you want the maker to appear ( for example, there is a Córdoba that is in Spain).
