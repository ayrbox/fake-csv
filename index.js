const csv = require('csv-writer');
const companyFactory = require('./factories/company');

const buildCompanies = (n = 100) =>
    new Array(n).fill(0).map(() => companyFactory.build());


const companies = buildCompanies(10000);

const writer = csv.createObjectCsvWriter({
    path: 'test.csv',
    header: [{
        id: 'id',
        title: 'ID'
    }, {
        id: 'companyId',
        title: 'Company UUID'
    }, {
        id: 'companyName',
        title: 'Name'
    }, {
        id: 'address',
        title: 'Address'
    },  {
        id: 'postalCode',
        title: 'PostCode'
    },  {
        id: 'website',
        title: 'WebSite'
    }]
});


writer.writeRecords(companies).then(() => console.log('Company file created successfully'));
