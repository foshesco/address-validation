const parseString = require('react-native-xml2js').parseString;

export const getAddressVerify = () => {
    let verifyUrl = `https://production.shippingapis.com/ShippingAPI.dll?API=Verify&XML=<AddressValidateRequest USERID="715FOSHE3693"><Address ID="0"><Address1></Address1><Address2>6406 Ivy Lane</Address2><City>Greenbelt</City><State>MD</State><Zip5></Zip5><Zip4></Zip4></Address></AddressValidateRequest>`
    fetch(verifyUrl, {
        Accept: 'text/xml',
        headers: new Headers({
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        })
    })
        .then(response => response.text())
        .then(text => console.log(text))
        .catch((err) => {
            console.log('Error fetching the feed: ', err)
        })
}