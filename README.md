# Fake CSV

Create CSV file with fake company list.

## Context

At work, I required a list of company for testing a functionality. Normally, I use faker.js embed
to seed or generate data. However, this time, I required a CSV file containting data.

I decided to create utils repo to generate file. At previous workplace I remember using Rosie to generate fake data for testing. Rosie is great defining data and tweak it as required for testing. So I bundled Rosie and Faker that generates random data (company to be precise) and writes in CSV.


## Quick Start

```
git clone git@github.com/ayrbox/git@github.com:ayrbox/fake-csv.git

yarn install

yarn start

```
