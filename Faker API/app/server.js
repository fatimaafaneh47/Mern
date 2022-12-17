const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        id: faker.datatype.uuid(),
    };
    return newFake;
};
const createCompany = () => {
    const newFake = {
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
        id: faker.datatype.uuid(),
    };
    return newFake;
};

const newFakeUser = createUser();
const newFakeCompany = createCompany();

console.log(newFakeUser);
console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});
app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});
app.get("/api/user/company", (req, res) => {
    res.json( {
        user: newFakeUser,
        company: newFakeCompany,
    } );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );