const fetch = require("node-fetch");

const USER_ID = process.env.USER_ID;
const BASE_URI =
    "http://production.shippingapis.com/ShippingAPITest.dll?API=CityStateLookup&XML=";
const config = {
    headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "GET",
    },
    method: "get",
};

exports.handler = async function (event, context) {
    const zipcode = event.queryStringParameters.zipcode;
    const xml = `<CityStateLookupRequest USERID="${USER_ID}"><ZipCode ID="0"><Zip5>${zipcode}</Zip5></ZipCode></CityStateLookupRequest>`;
    try {
        const response = await fetch(`${BASE_URI}${xml}`, config);
        if (!response.ok) {
            return { statusCode: response.status, body: response };
        }
        const data = await response.text();
        return {
            statusCode: 200,
            body: data,
        };
    } catch (err) {
        console.log("Error: ", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};