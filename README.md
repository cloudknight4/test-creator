# TestCreator 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8..

## Design philosophy

#### Glossary
 - page
 - app component
 - state controller
 - data service
 - UI element

A **page** contains and organizes **app components** and has no knowledge of anything else.

An **app component** handles calls to **app state** and organizes/manages **UI elements**.

A **state controller** maintains the state of the app and handles the coordination of state between **app components**.

A **data service** handles the calls to the back for sending and retrieving data.

A **UI element** is a prebuilt item that specializes in displaying visuals to the user. It does not have knowledge of state or services or anything outside itself. 

#### CSS on components

No padding or margins are applied to the component itself to allow for ease use in terms of alignment and spacing 
when imported into a page. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
