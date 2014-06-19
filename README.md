async.eachObject
=========

Simple async function to iterate objects.
Extends [async](https://github.com/caolan/async) module.

## Install

If you use in your project any other async function from [async](https://github.com/caolan/async) module (of course you are  :)  ),
please make sure that you install ```async``` module into your node_modules.
It is desirable to use in your project one instance of ```async``` module. Read about [Node.JS Folders and Modules](http://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)
dependencies.

```
npm install async

npm install async-each-object
```

##Usage

```javascript
var asyncEachObject = require('async-each-object')

asyncEachObject(
    {one: 1, two: 2},
    function iterator(value, key, nextEach) {
        console.log(key, '=', value)

        nextEach()
    },
    function complete(error) {
        if (error) {
            console.error(error)
        }
        else {
            console.log('Iteration complete')
        }
    }
)
```

If you have installed ```async``` module, and install ```async-each-object``` after ```async```, you can use module like this:
```javascript
// Order is not important
var async = require('async')

// Require once in project
var asyncEachObject = require('async-each-object')

// asyncEachObject function extends async
async.eachObject()
```

## License

(MIT License)
