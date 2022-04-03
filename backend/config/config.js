require('dotenv').config()
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors], 
    length: 2
}); // big-donkey

const credentials = {
    mysql: {   
        host     : `${process.env.MYSQL_HOST}`,
        user     : `${process.env.MYSQL_USER}`,
        password : `${process.env.MYSQL_PASSWORD}`,
        database : `${process.env.MYSQL_DATABASE}`   
    },
    mongo: {
        url: `${process.env.MONGO_URL}`,     
    },
    s3: {
        //apiVersion: '2006-03-01',
        region: `${process.env.REGION}`,
        accessKeyId: `${process.env.ACCESSKEYID}`,
        secretAccessKey: `${process.env.SECRETACCESSKEY}` 
    },
    name: {
        appName: shortName
    }
}

module.exports = credentials;