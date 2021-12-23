import React from "react";
import './document-common.css';

const Document = () => {
    return (
        <div className="document-container">
            <div className="document-copy">
                This site was built in React using the USPS APIs. There are just two APIs used on this site but the USPS offers many more. These APIs are free to use and are very powerful. Below is the USPS Address API documentation that was referred to while building this site.
            </div>
            <div className="document-links">
                <div>
                    <h4>Address Information API</h4>
                    <ul>
                        <li>
                            Address Validation/Standardization
                        </li>
                        <li>
                            City & State Lookup
                        </li>
                        <li>
                            Zip Code™ Lookup
                        </li>
                    </ul>
                    <a href="https://www.usps.com/business/web-tools-apis/address-information-api.pdf" alt="USPS Address Information API Guide">Address Information API Guide</a>
                </div>
                <div>
                    <h4>API Developer Guide</h4>
                    <a href="https://www.usps.com/business/web-tools-apis/general-api-developer-guide.pdf" alt="USPS Developer Guide">Developer Guide</a>
                </div>
            </div>
            <div className="document-copy">
                Links to other USPS APIs not used on this site can be found below.
            </div>
            <div className="document-links">
                <div>
                    <h4>Track and Confirm API Guide</h4>
                    <ul>
                        <li>
                            Tracking
                        </li>
                        <li>
                            Tracking by Email
                        </li>
                        <li>
                            Proof of Delivery
                        </li>
                        <li>
                            Tracking Proof of Delivery
                        </li>
                        <li>
                            Return Receipt Electronic
                        </li>
                    </ul>
                    <a href="https://www.usps.com/business/web-tools-apis/track-and-confirm-api.pdf" alt="USPS Track and Confirm API Guide">Track and Confirm API Guide</a>
                </div>
                <div>
                    <h4>Rate Calculator API Guide</h4>
                    <ul>
                        <li>
                            Domestic Price Calculator
                        </li>
                        <li>
                            International Price Calculator
                        </li>
                    </ul>
                    <a href="https://www.usps.com/business/web-tools-apis/rate-calculator-api.pdf" alt="USPS Rate Calculator API Guide">Rate Calculator API Guide</a>
                </div>
            </div>
            <div className="document-copy">
                And many more can be found here.
            </div>
            <div className="document-links">
                <div>
                    <h4>All API Documentation</h4>
                    <a href="https://www.usps.com/business/web-tools-apis/documentation-updates.htm" alt="USPS API Documentation">All API Documentation</a>
                </div>
            </div>
        </div>
    )
}

export default Document