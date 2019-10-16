const faker = require('faker');
const { Factory } = require('rosie');


const { random, company, address, internet } = faker;

const companyFactory = new Factory()
    .sequence('id')
    .attr('companyId', () => random.uuid())
    .attr('companyName', () => company.companyName())
    .attr('address', () => address.streetAddress())
    .attr('postalCode', () => address.zipCode())
    .attr('website', () => internet.url()) 

module.exports = companyFactory;