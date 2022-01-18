const fs = require('fs');
const {solvedProblemModel} = require('../Model/SolvedProblem.model');

const convert = Object.keys(solvedProblemModel).map((key) => {        
    const num_name = solvedProblemModel[key].name.split(" "); 
    let name, number;
    if (!isNaN(num_name[0])) {
        number = parseInt(num_name[0]);
        name = num_name.slice(1).join(" ");
    } else {
        name = solvedProblemModel[key].name
    }

    return number !== undefined ? {
        cote_id: key,
        name: name,
        number: number,
        platform: solvedProblemModel[key].platform,
        difficulty: solvedProblemModel[key].difficulty,
        language: solvedProblemModel[key].language,
        topic: solvedProblemModel[key].topic,
        url: solvedProblemModel[key].url
    } : {
        cote_id: key,
        name: name,
        platform: solvedProblemModel[key].platform,
        difficulty: solvedProblemModel[key].difficulty,
        language: solvedProblemModel[key].language,
        topic: solvedProblemModel[key].topic,
        url: solvedProblemModel[key].url
    }
});

fs.writeFileSync('convert.json', JSON.stringify(convert));

module.exports = { solvedProblemModel };