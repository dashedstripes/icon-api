# Icon API

An API based icon search.

## Motivation

The idea for this came about whilst I was building my hobby CMS. In the app, users are able to create objects and name them whatever they like. When an object is created, a new link is added to the sidebar that showed a basic "object" icon for anything the user made. I wanted the icon to be related to the object name, so thought the best way to achieve this would be to create a dictionary of words that relate to a single icon. In this way, the words "home", "house", and "real estate" all would show an icon of a home.

## How to use

Once I'm happy with the functionality I'll host this app at icons.pateo.co - until then it's in development.

## Contributing

If you'd like to help develop the API it would be great to add words and icons to the data folder. You should be able to work out how everything is structured, there is a file for each letter and all the files are being concatenated into an index file in each respective folder. For the time being I'm using FontAwesome classes as the return value, I might update it later to let the user choose where they get icons from, but for now the icon values returned are from FontAwesome. 

To get the app working in development it's pretty simple, download the rep, run `yarn install`, then run `node index.js`, or `nodemon index.js` if you've got nodemon installed.