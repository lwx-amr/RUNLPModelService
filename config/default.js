'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "NLPModelService",
        baseUrl: `http://localhost:`,
        port: process.env.PORT || 3005,
        jobsService: 'http://localhost:3003/api/v1/jobs'
    },
    client: {
        url: process.env.CLIENT || 'http://localhost:3000'
    },
    api: {
        prefix: '^/api/v[1-9]',
        version: [1],
    },
    database: {
        url: process.env.DB_URL || "mongodb+srv://rankup:rank1998@cluster0-9enme.mongodb.net/RUModelDB?retryWrites=true&w=majority",
    }
};
