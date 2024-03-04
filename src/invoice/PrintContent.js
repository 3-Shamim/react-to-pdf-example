import React from 'react';
import "./print_content.scss";

const PrintContent = ({componentRef}) => {

    const getPageMargins = () => {
        return `@page {
                    margin: 0px !important;
                 }
                 @media print {
                     .page-break {
                        page-break-before: always;
                    }
                }`;
    };

    return (
        <div ref={componentRef}>
            <style>{getPageMargins()}</style>

            <table
                className="pdf-table"
            >
                <thead>
                <tr className="branding-header-tr">
                    <td colSpan={6}>
                        <div
                            className="branding-header"
                        >
                            <div className="left">
                                <img
                                    src="/ems.png"
                                    alt="ems logo"
                                />
                            </div>

                            <div
                                className="right"
                            >
                                <h1>AL ZAKI AUTO SPARE PARTS TR. LLC.</h1>
                                <h4>
                                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 P.O.BOX:35723,
                                    TEL: 06-5323414,
                                    ACCOUNTS:06-5394409, FAX:06-5394408 ACCOUNTS:06-5394409, FAX:06-5394408
                                    FAX:06-5394408 FAX:06-5394408
                                </h4>
                                <h4>
                                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408
                                </h4>
                                <h4>
                                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408
                                </h4>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan={6}>
                        <div>
                            P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408P.O.BOX:35723, TEL:
                            06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>SL.</td>
                    <td>Product Name</td>
                    <td>Display Name</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>


                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div
                            className="sl"
                        >
                            999
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA
                        </div>
                    </td>
                    <td
                        style={{
                            width: "400px"
                        }}
                    >
                        <div className="text">
                            ASUS VIVOBOOK 15 X515JA CORE I3 10TH GEN 15.6" FHD LAPTOP ASUS VIVOBOOK 15 X515JA CORE I3
                            10TH
                            GEN 15.6" FHD LAPTOP
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                    <td>
                        <div className="digit">
                            99999999
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>

            <div>footer</div>
        </div>
    );
};

export default PrintContent;