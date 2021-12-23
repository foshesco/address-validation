const fetch = require("node-fetch");

const USER_ID = process.env.REACT_APP_USERID;
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
    // The zipcode is sent by the frontend application. 
    // This is where we use it.
    const address = event.queryStringParameters.address;
    const addresstwo = event.queryStringParameters.addresstwo;
    const city = event.queryStringParameters.city;
    const state = event.queryStringParameters.state;
    const zipcode = event.queryStringParameters.zipcode;
    const zipcodeplus = event.queryStringParameters.zipcodeplus;

    // The xml variable is the string we are going to send to the
    // USPS to request the information
    const xml = `<AddressValidateRequest USERID="${USER_ID}"><Revision>1</Revision><Address ID="0"><Address1>${addresstwo}</Address1><Address2>${address}</Address2><City>${city}</City><State>${state}</State><Zip5>${zipcode}</Zip5><Zip4>${zipcodeplus}</Zip4></Address></AddressValidateRequest>`;
    console.log("xml", xml)

    try {
        // Using syntactic sugar (async/await) we send a fetch request
        // with all the required information to the USPS.
        const response = await fetch(`${BASE_URI}${xml}`, config);
        // We first check if we got a good response. response.ok is
        // saying "hey backend API, did we receive a good response?"
        if (!response.ok) {
            // If we did get a good response we store the response
            // object in the variable
            return { statusCode: response.status, body: response };
        }
        // Format the response as text because the USPS response is
        // not JSON but XML
        const data = await response.text();
        // Return the response to the frontend where it will be used.
        return {
            statusCode: 200,
            body: data,
        };
        // Error checking is very important because if we don't get a
        // response this is what we will use to troubleshoot problems
    } catch (err) {
        console.log("Error: ", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }),
        };
    }
};