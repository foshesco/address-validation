const fetch = require("node-fetch");

const USER_ID = process.env.USER_ID;
const BASE_URI =
    "http://production.shippingapis.com/ShippingAPITest.dll?API=Verify&XML=";
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
    const address = event.queryStringParameters.address;
    const addresstwo = event.queryStringParameters.addresstwo;
    const city = event.queryStringParameters.city;
    const state = event.queryStringParameters.state;
    const zipcode = event.queryStringParameters.zipcode;
    const zipcodeplus = event.queryStringParameters.zipcodeplus;
    const xml = `<AddressValidateRequest USERID="${USER_ID}"><Revision>1</Revision><Address ID="0"><Address1>${addresstwo}</Address1><Address2>${address}</Address2><City>${city}</City><State>${state}</State><Zip5>${zipcode}</Zip5><Zip4>${zipcodeplus}</Zip4></Address></AddressValidateRequest>`;
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