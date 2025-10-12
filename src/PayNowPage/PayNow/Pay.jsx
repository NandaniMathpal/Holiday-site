import React from 'react'
import './Pay.css'

const Pay = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>

            <div className="box">
                <div className="insidebox">
                    <div className="pay-head">
                    <h2>PAY NOW</h2>
                    </div>

                    <div className="payinput">
                    <input type="text" placeholder='Enter Amount'/>
                    </div>

                    <div className="paybtn">
                    <button>PAY</button>
                    </div>
                </div>
            </div>
</div>       

    )
}

export default Pay
