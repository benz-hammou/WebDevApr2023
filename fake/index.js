const {faker} = require('@faker-js/faker');
const fs = require("fs")

const generateFakeData = () => {
  const fakeData = [];

  for (let i = 0; i < 10; i++) {
    const data = {
      id: faker.datatype.number({min:1,max:100}),
      fullname: faker.name.findName(),
      profession: faker.name.jobTitle(),
      gender: faker.name.gender(),
      nationality: faker.address.country(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    };

    fakeData.push(data);
  }

  return fakeData;
};

const fakeObjects = generateFakeData();

console.log(JSON.stringify(fakeObjects));
fs.writeFileSync('data.json',JSON.stringify(fakeObjects),()=>{
    console.log("sqved");
})