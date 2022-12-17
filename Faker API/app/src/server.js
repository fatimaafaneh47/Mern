
const express = require("express");
const app = express();
const port = 8000;


const { faker } = require('@faker-js/faker');

const User=()=>{
    const newUser ={
        id :faker.datatype.number(),
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        phoneNumber : faker.phone.phoneNumber(),
        email : faker.internet.email(),
        password :faker.internet.password(),
    };
    return newUser();
    
  }

const Company=()=>{
 const newCompany = {
    id :faker.datatype.number(),
    name : faker.company.companyName(),
    address : {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
    
  }
  return newCompany();
}
const newFakeUser = User();
const newFakeCompany = Company();

console.log(newFakeUser);
console.log(newFakeCompany);


app.get("/api/users/new", (req,res)=>{
  res.json({results:newFakeUser});
});

app.get("/api/companies/new", (req,res)=>{
  res.json({results:newFakeCompany});
});

app.get("/api/user/company", (req,res) =>{
  res.json({user:newFakeUser,
  company:newFakeCompany});
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );