import React, { useState } from "react";
import { xml2json } from "../../utils/helper";
import Popup from "../popup/Popup";
import './address-common.css';

const AddressCheck = () => {
    const fullAddress = { addressOne: "", addressTwo: "", city: "", state: "", zipCode: "", zipCodePlus: "" };
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodePlus, setZipCodePlus] = useState("");
    const [address, setAddress] = useState(fullAddress);
    // const [loading, setLoading] = useState(false);
    const [addressChecked, setAddressChecked] = useState(false);
    const formValid = addressOne && city && state;

    const getAddress = async () => {
        const parser = new DOMParser();

        try {
            if (formValid) {
                const response = await fetch(
                    `/.netlify/functions/addresscheck?&address=${addressOne}&addresstwo=${addressTwo}&city=${city}&state=${state}&zipcode=${zipCode}&zipcodeplus=${zipCodePlus}`,
                    {
                        headers: { accept: "application/json" },
                    }
                );
                const data = await response.text();
                const srcDOM = parser.parseFromString(data, "application/xml");
                const res = xml2json(srcDOM);

                if (res?.AddressValidateResponse?.Address?.Zip5) {
                    // setLoading(false);
                    setAddress({
                        addressOne: res.AddressValidateResponse.Address.Address2,
                        addressTwo: res.AddressValidateResponse.Address.Address1 || '',
                        city: res.AddressValidateResponse.Address.City,
                        state: res.AddressValidateResponse.Address.State,
                        zipCode: res.AddressValidateResponse.Address.Zip5,
                        zipCodePlus: res.AddressValidateResponse.Address.Zip4,
                    });
                    setAddressChecked(true);
                } else if (res?.AddressValidateResponse?.Address?.Error) {
                    // setLoading(false);
                    setAddress({
                        addressOne: "Invalid address. Please try again.",
                        addressTwo: "",
                        city: "",
                        state: "",
                        zipCode: "",
                        zipCodePlus: "",
                    });
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="page-container">
            <div className="address-container">
                <form action="" className="form-data">
                    <h2>Address Check</h2>
                    <div className="input-container">
                        <input
                            maxLength="36"
                            className="floating__input"
                            placeholder="Address Line 1"
                            value={addressOne}
                            type="text"
                            name="addressOne"
                            autoComplete="off"
                            id="addressOne"
                            onChange={(e) => {
                                // setLoading(true);
                                setAddressOne(e.target.value);
                            }}
                        />
                        <label className="floating__label" data-content="Address Line 1">
                            <span className="hidden--visually">Address Line 1</span>
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            maxLength="36"
                            className="floating__input"
                            placeholder="Address Line 2"
                            value={addressTwo}
                            type="text"
                            name="addressTwo"
                            autoComplete="off"
                            id="addressTwo"
                            onChange={(e) => {
                                // setLoading(true);
                                setAddressTwo(e.target.value);
                            }}
                        />
                        <label className="floating__label" data-content="Address Line 2">
                            <span className="hidden--visually">Address Line 2</span>
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            maxLength="36"
                            className="floating__input"
                            placeholder="City"
                            value={city}
                            type="text"
                            name="city"
                            autoComplete="off"
                            id="city"
                            onChange={(e) => {
                                // setLoading(true);
                                setCity(e.target.value);
                            }}
                        />
                        <label className="floating__label" data-content="City">
                            <span className="hidden--visually">City</span>
                        </label>
                    </div>
                    <div className="input-container">
                        <input
                            maxLength="11"
                            className="floating__input"
                            placeholder="State"
                            value={state}
                            type="text"
                            name="state"
                            autoComplete="off"
                            id="state"
                            onChange={(e) => {
                                // setLoading(true);
                                setState(e.target.value);
                            }}
                        />
                        <label className="floating__label" data-content="State">
                            <span className="hidden--visually">State</span>
                        </label>
                    </div>
                    <div className="zipcode-container">
                        <div className="input-container">
                            <input
                                maxLength="5"
                                className="floating__input"
                                placeholder="Zip Code"
                                value={zipCode}
                                type="text"
                                name="zipCode"
                                autoComplete="off"
                                id="zipCode"
                                onChange={(e) => {
                                    // setLoading(true);
                                    setZipCode(e.target.value);
                                }}
                            />
                            <label className="floating__label" data-content="Zip Code">
                                <span className="hidden--visually">Zip Code</span>
                            </label>
                        </div>
                        <div className="input-container">
                            <input
                                maxLength="4"
                                className="floating__input"
                                placeholder="Zip Code +4"
                                value={zipCodePlus}
                                type="text"
                                name="zipCodePlus"
                                autoComplete="off"
                                id="zipCodePlus"
                                onChange={(e) => {
                                    // setLoading(true);
                                    setZipCodePlus(e.target.value);
                                }}
                            />
                            <label className="floating__label" data-content="Zip Code +4">
                                <span className="hidden--visually">Zip Code +4</span>
                            </label>
                        </div>
                    </div>
                    <a href="#!" className="address-submit-button" onClick={getAddress}>Check Address</a>
                </form>
            </div>
            <Popup trigger={addressChecked} setTrigger={setAddressChecked}>
                <div>
                    <div className="checked-address-header">
                        You entered:
                    </div>
                    <div>
                        {addressOne}
                    </div>
                    <div>
                        {addressTwo}
                    </div>
                    <div>
                        {city}
                    </div>
                    <div>
                        {state}
                    </div>
                    <div>
                        {zipCode && { zipCode }}{zipCodePlus && -{ zipCodePlus }}
                    </div>
                </div>
                <div>
                    <div className="checked-address-header">
                        Did you mean:
                    </div>
                    <div>
                        {address.addressOne}
                    </div>
                    <div>
                        {address.addressTwo}
                    </div>
                    <div>
                        {address.city}
                    </div>
                    <div>
                        {address.state}
                    </div>
                    <div>
                        {address.zipCode}-{address.zipCodePlus}
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default AddressCheck;