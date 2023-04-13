# cb-app-test-feature-capacitor
 cb-app-test-feature-capacitor

##### Test description

In order to complete the test, the following requirements of the project/ app need to be met:

- need to contain 2 components, based on routing
- within the app, when you come from any of those 2 deeplinks(explained below) you will display the query parameters within the appropiate component and you will save them to native localstorage with a 1h expiration
- closing the app and opening it again, will redirect you automaticaly to the route saved in localstorage

***Deeplinks:****

`cbionic:///facebook?utm_campaign=[VALUE]&utm_medium=[VALUE]`

`cbionic:///twitter?utm_campaign=[VALUE]&utm_medium=[VALUE]`


And basically you should display within the app the `utm_campaign` and `utm_medium` parameters value.

Used `https://bulma.io/documentation/` for CSS styling