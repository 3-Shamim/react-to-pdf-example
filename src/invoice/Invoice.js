import React, {useRef} from 'react';
import InvoicePrint from "./InvoicePrint";
import "./invoice.scss";


const Invoice = () => {

    const printRef = useRef(null);


    const handlePrint = () => {
        setTimeout(() => {
            if (printRef) {
                printRef.current.refHandlePrint();
            }
        }, 100);
    }
    return (

        <div
            className="invoice"
        >
            <button
                style={{
                    position: "relative",
                    overflow: "hidden"
                }}
                className="button"
                onClick={() => handlePrint()}
            >
                Print
            </button>

            <InvoicePrint
                ref={printRef}
            />

        </div>


    );
};

export default Invoice;