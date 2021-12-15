import { loadPayengine } from "payengine";
import React, { useEffect } from 'react';

const Onboarding = (props) => {

    useEffect(() => {
        // Load Payengine on first render only
        loadPayengine({
            publicKey: "pk_test_c7KVO3IThAzU0uBq8fbSXJ8rBUJ60mo4",
        }).then((error) => {
            console.log(error)
        });
    }, []);


    return (
        <>
            <h1>
                {props.merchandiseId}
            </h1>
            <h1>
                {props.merchandiseHash}
            </h1>
            <pay-engine
                type="boarding"
                merchant-id={props.merchandiseId}
                hash={props.merchandiseHash}>
            </pay-engine>
        </>

    );
}

export default Onboarding;
