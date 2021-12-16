import { loadPayengine } from "payengine";
import React, { useEffect } from 'react';

const Onboarding = (props) => {

    useEffect(() => {
        // Load Payengine on first render only
        loadPayengine({
            publicKey: "pk_test_7XSU9zBEjm8IxWXIJfzgl98Ic0sC27Yw",
        }).then((error) => {
            console.log(error)
        });
    }, []);


    return (
        <>
            <pay-engine
                type="boarding"
                merchant-id={props.merchandiseId}
                hash={props.merchandiseHash}>
            </pay-engine>
        </>

    );
}

export default Onboarding;
