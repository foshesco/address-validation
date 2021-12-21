import React, { useState, useEffect } from "react";
import { xml2json } from "../../utils/helper";
import './address-common.css';

const AddressValidation = () => {
    const parser = new DOMParser();

    const initialCityState = { city: "", state: "" };
    // eslint-disable-next-line
    const [cityState, setCityState] = useState(initialCityState);
    const [zipcode, setZipcode] = useState("");
    const [loading, setLoading] = useState(false);

    // We check to see if the input is 5 characters long and there
    // is something there
    const isZipValid = zipcode.length === 5 && zipcode;

    useEffect(() => {
        const fetchCityState = async () => {
            try {
                // If zip is valid then...fetch something
                if (isZipValid) {
                    const response = await fetch(
                        `/.netlify/functions/getCityState?&zipcode=${zipcode}`,
                        {
                            headers: { accept: "application/json" },
                        }
                    );
                    const data = await response.text();
                    const srcDOM = parser.parseFromString(data, "application/xml");
                    console.log(xml2json(srcDOM));
                    const res = xml2json(srcDOM);

                    // Using optional chaining we check that all the DOM
                    // items are there
                    if (res?.CityStateLookupResponse?.ZipCode?.City) {
                        // set loading to false because we have a result
                        setLoading(false);
                        // then spread the result to the setCityState hook
                        setCityState({
                            ...cityState,
                            city: res.CityStateLookupResponse.ZipCode.City,
                            state: res.CityStateLookupResponse.ZipCode.State,
                        });

                        // Error checking. User did not put in a valid zipcode
                        // according to the API
                    } else if (res?.CityStateLookupResponse?.ZipCode?.Error) {
                        setLoading(false);
                        // then spread the error to the setCityState hook
                        setCityState({
                            ...cityState,
                            city: `Invalid Zip Code for ${zipcode}`,
                            state: "Try Again",
                        });
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchCityState();
    }, [zipcode]);

    return (
        <div className="addressFormContainer">
            <h1>City/State Lookup Tool</h1>
            <form action="" className="form-data">
                <label htmlFor="zip">Type Zip Code Here</label>
                <input
                    className="zip"
                    value={zipcode || ""}
                    placeholder="XXXXX"
                    type="text"
                    name="zip"
                    id="zip"
                    onChange={(event) => {
                        const { value } = event.target;
                        setZipcode(value.replace(/[^\d{5}]$/, "").substr(0, 5));
                    }}
                />
                <label htmlFor="city">City</label>
                <input
                    className={`city`}
                    value={cityState.city}
                    type="text"
                    name="city"
                    disabled
                    id="city"
                />
                <label htmlFor="state">State</label>
                <input
                    className={`state`}
                    value={cityState.state}
                    type="text"
                    name="state"
                    disabled
                    id="state"
                />
            </form>
            <pre>
                <code>
                    {JSON.stringify({
                        zipcode: zipcode,
                        city: cityState.city,
                        state: cityState.state,
                    })}
                </code>
            </pre>
        </div>
    );
}

export default AddressValidation;