import React, { useState, useEffect } from "react";
import { xml2json } from "../../utils/helper";
import './citystate-common.css';

const CityAndState = () => {
    const initialCityState = { city: "", state: "" };
    const [cityState, setCityState] = useState(initialCityState);
    const [zipcode, setZipcode] = useState("");
    const [loading, setLoading] = useState(false);

    const isZipValid = zipcode.length === 5 && zipcode;

    useEffect(() => {
        const parser = new DOMParser();
        const fetchCityState = async () => {
            try {
                // If zip is valid then...fetch something
                if (isZipValid) {
                    const response = await fetch(
                        `/.netlify/functions/cityandstate?&zipcode=${zipcode}`,
                        {
                            headers: { accept: "application/json" },
                        }
                    );
                    const data = await response.text();
                    const srcDOM = parser.parseFromString(data, "application/xml");
                    const res = xml2json(srcDOM);

                    if (res?.CityStateLookupResponse?.ZipCode?.City) {
                        setLoading(false);
                        setCityState({
                            ...cityState,
                            city: res.CityStateLookupResponse.ZipCode.City,
                            state: res.CityStateLookupResponse.ZipCode.State,
                        });

                    } else if (res?.CityStateLookupResponse?.ZipCode?.Error) {
                        setLoading(false);
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
        <div className="page-container">
            <div className="address-container">
                <form action="" className="form-data">
                    <h2>City/State Lookup Tool</h2>
                    <div className="input-container">
                        <input
                            maxLength="5"
                            className="floating__input"
                            value={zipcode}
                            placeholder="Zip Code"
                            type="text"
                            name="zip"
                            id="zip"
                            onChange={(e) => {
                                setLoading(true);
                                setCityState(initialCityState);
                                setZipcode(e.target.value.replace(/[^\d{5}]$/, "").substr(0, 5));
                            }}
                        />
                        <label className="floating__label" data-content="Zip Code">
                            <span className="hidden--visually">Zip Code</span>
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            className="floating__input"
                            value={cityState.city}
                            type="text"
                            name="city"
                            disabled
                            id="city"
                        />
                        <label className="floating__label" data-content="City">
                            <span className="hidden--visually">City</span>
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            className="floating__input"
                            value={cityState.state}
                            type="text"
                            name="state"
                            disabled
                            id="state"
                        />
                        <label className="floating__label" data-content="State">
                            <span className="hidden--visually">State</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CityAndState;