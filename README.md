# Printomatic

This is a very simple check-in app made for a FourAthens meet and greet. People fill in some basic info and check the items they want. The basic info gets saved to the database and the order items get printed. The interface was made using Sencha Touch 2 and it's served by Express with a CouchDB store.

## Usage

Our setup included a receipt printer attached to an airport express. It will print to whatever printer is set as the default in system preferences, so be sure to configure that before getting started. The app also assumes you have CouchDB running in party mode. 

From within the project directory:

    node server.js

inside of the project directory. You can then visit `http://localhost:8080` from any WebKit browser. To see a list of the people that have checked in you can visit `http://localhost:8080/attendees`

## Etc

This is a dead simple little example that was developed in just a few days. Security wasn't even considered, so keep that in mind if you find some use for it.