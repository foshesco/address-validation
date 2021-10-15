// import { Link } from "react-router-dom";
import './address-common.css'
import { getAddressVerify } from '../../utils/helper';

const AddressValidation = () => {
    getAddressVerify();
    return (
        <section className="pageContainer">
            <div className="homeContainer">
                {/* <div>
                        <img className="homeImg" src="https://golfweek.usatoday.com/wp-content/uploads/sites/87/2019/10/usatsi_12533119.jpg"></img>
                    </div> */}
                <div className="addressFormContainer borderTheme">
                    <div className="addressForm">
                        <input className="addressForm-input" autoComplete='none' placeholder='Address'
                        />
                        <input className="addressForm-input" placeholder='City' />
                        <input className="addressForm-input" placeholder='State' />
                        <div className="addressForm-input-zipContainer">
                            <input className="addressForm-input-zip" placeholder='Zip Code' /> - <input className="addressForm-input-zipext" placeholder='Zip Code Ext.' />
                        </div>
                    </div>
                </div>
                {/* <div className="homeLinkContainer">
                        <Link to='/rankings' className="homeLink">
                            <b>World Golf Rankings</b>
                            <img className="homeLinkImg" src='https://static.thenounproject.com/png/3922525-200.png' />
                        </Link>
                        <Link to='/leaderboard' className="homeLink">
                            <b>PGA Tour Leaderboard</b>
                            <img className="homeLinkImg" src='https://static.thenounproject.com/png/72549-200.png' />
                        </Link>
                    </div> */}
            </div>
        </section>
    )
}

export default AddressValidation