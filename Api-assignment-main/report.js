const newman = require('newman');
require('dotenv').config();
 
newman.run({
   // collection:`https://api.postman.com/collections/29908933-b4c68a0d-40dd-40e4-ad2a-2512a120a377?access_key=${process.env.access_key}`,
    collection:require('./collection/dmoney-user assigenment.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
