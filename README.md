# AngularSynopsisForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Introduction
The above scenario is to create a simple registration screen. Only the front-end part is required
which can be done in any framework desired. For this task, we do however require a framework so
pure JS alone should not be used. Components are allowed and can be used as many times as
needed.

## Details
The fields are:
• Name
• Surname
• Address
• Country
• Phone
• Email
• Password
• Re-type password

The form needs to have a submit function which submits to itself and show on screen the submitted
values.

## Validation

All the fields are required, and email should be in a valid format. Password must be between 2 and 6
character and includes upper, lower and a symbol (!,*,etc.). The user needs to be notified of any
validation errors. Password and Re-Password must match.

Phone field is made up of 2 parts, the country code and the actual number. As an example, see
below although the actual look and feel can change.

The list of countries should be taken from https://restcountries.eu/rest/v2/all (read through json
api). When a user selects a country, the country code in the phone part should be auto set. So as a 
user, I will select the country and then just enter the phone without having to enter the country
code.

When the submit button is clicked the password needs to be MD5 and then that value is submitted.
When handling passwords its important never to send them in clear text. 
