# Getting Started with App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Requirements 
Endpoint: https://join.reckon.com/stock-pricing that returns data for our stock quotes.\
Given this data, create a service that fetches the data from the api every 2 seconds.\
Given the index.html rendered, we expect that 2 React components will be rendered on screen "Log" and "Summary".\
Given these two React components, we expect to see them using some implementation of state, hooks or another appropriate middleware.\
Given the 'Log' Section in the rendered page, we expect to see this continually updated every 2 seconds with the latest pricing information, with the newest information at the top of the screen\
Given the 'Summary' Section, we expect to see an aggregate view of the data from the api that has been processed by the web app. This aggregate view should contain:\
Starting Price Lowest Price seen Highest Price seen Current Price\
Because there is a lot of data coming through the log, when we view the page, we expect to see a pause / resume button rendered as a seperate component.\
When the "Pause' button is hit we expect that the Log will stop updating, but we expect the summary view to continue to update and show current values\
When the "Pause" button is hit, we expect that the pause button will be have its text changed to 'Resume"\
When the "Resume" button is hit, we expect that the Log will again continue to update, but it will not list any stock updates since 'pause' was pressed.\
When the "Resume" button is hit, we expect that the text of this button will change to "Pause".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Snapshots`
<img width="1484" alt="View-1" src="https://user-images.githubusercontent.com/6646676/163025974-19d30c6d-bf3d-41a7-a0f8-786c51500aab.png">
<img width="1581" alt="view-2" src="https://user-images.githubusercontent.com/6646676/163025993-d38c0b6d-66b9-4aac-85f6-62ce04652da0.png">
