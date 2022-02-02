const fs = require('fs');
const {codingTestModel} = require('../Model/CodingTest.model');

const convert = Object.keys(codingTestModel).map((key) => {        
    const num_name = codingTestModel[key].name.split(" "); 
    let name, number;
    if (!isNaN(num_name[0])) {
        number = parseInt(num_name[0]);
        name = num_name.slice(1).join(" ");
    } else {
        name = codingTestModel[key].name
    }

    return number !== undefined ? {
        cote_id: key,
        name: name,
        number: number,
        platform: codingTestModel[key].platform,
        difficulty: codingTestModel[key].difficulty,
        language: codingTestModel[key].language,
        topic: codingTestModel[key].topic,
        url: codingTestModel[key].url
    } : {
        cote_id: key,
        name: name,
        platform: codingTestModel[key].platform,
        difficulty: codingTestModel[key].difficulty,
        language: codingTestModel[key].language,
        topic: codingTestModel[key].topic,
        url: codingTestModel[key].url
    }
});

fs.writeFileSync('convert.json', JSON.stringify(convert));

module.exports = { codingTestModel };