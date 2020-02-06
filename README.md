The Application
========================

An application to parse the CSV file and display it in grid.

### Workings

Starting a Node App

```
npm init
```

Install `electron`

```
npm install --save-dev electron
```

Add the start script in `package.json`
```
"scripts": {
    "start": "electron ."
  },
```

Start the appication
```
npm start
```

### Libs

 - [Papaparse][lib-papaparse] for CSV parsing
 - [js-grid][lib-js-grid]


### Packaging

This is done manually now as per the `Electron` documents.






[lib-papaparse]: https://github.com/mholt/PapaParse
[lib-js-grid]:http://js-grid.com/docs/




