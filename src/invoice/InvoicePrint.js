import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {useReactToPrint} from "react-to-print";
import PrintContent from "./PrintContent";

const InvoicePrint = forwardRef(({data, pdfConfig, title}, ref) => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useImperativeHandle(ref, () => ({

        refHandlePrint() {
            handlePrint();
        }

    }));

    return (<PrintContent
        componentRef={componentRef}
    />);
});


export default InvoicePrint;