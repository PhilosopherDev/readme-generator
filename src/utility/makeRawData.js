const fs = require("fs");
const ID = require("./UniqueId");

const TIL_Data = new Array(110).fill(null).map(() => TILDataMaker());

function TILDataMaker() {
    return {
        til_id: ID(),
        name: "",
        date: "",
        category: "",
        url: [{
            name: "",
            icon: "",
            link: ""
        }]
    }
}

fs.writeFileSync('./TIL_Data.json', JSON.stringify(TIL_Data));