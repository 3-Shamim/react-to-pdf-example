import React, {useRef, useState} from 'react';
import InvoicePrint from "./InvoicePrint";
import PrintContent from "./PrintContent";
import "./invoice.scss";


const Invoice = () => {

    const printRef = useRef(null);

    const [isPrint, setIsPrint] = useState(false);

    const handlePrint = () => {
        setIsPrint(true);
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
                className="button"
                onClick={() => handlePrint()}
            >
                Print
            </button>


            <PrintContent/>

            {
                isPrint ? <InvoicePrint
                    ref={printRef}
                /> : <></>
            }
        </div>


    );
};

export default Invoice;