const axios = require("axios");
const mapArrToString = require("../mapArrToString/mapArrToString");

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const useIds = response.data.map((user) => user.id);
    return mapArrToString(useIds);
  } catch (e) {}
};

module.exports = getData;
