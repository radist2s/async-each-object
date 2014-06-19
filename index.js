var async = require('async')

/**
 * @param {Object} object
 * @param {Function} iterator Function with arguments (value, key, asyncNext)
 * @param {Function} [callback] Async each end
 * @exports async-each-object
 */

function asyncEachObject(object, iterator, callback) {
    async.each(
        Object.keys(object || {}),
        function(key, next){
            iterator(object[key], key, next)
        },
        callback
    )
}

async.eachObject = asyncEachObject

module.exports = asyncEachObject