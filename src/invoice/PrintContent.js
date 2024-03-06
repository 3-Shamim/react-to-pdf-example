import React from 'react';
import "./print_content.scss";
import {generateInvoiceData} from "../helpers/InvoiceData";

const PrintContent = ({componentRef, hideProductName = false}) => {

    const getPageMargins = () => {
        return `@page {
                    margin: 0px !important;
                 }
                 @media print {
                    div {
                        break-inside: avoid;
                    }
                    .page-break {
                        page-break-before: always;
                    }
                }`;
    };

    const nameColClass = hideProductName ? "single-name-col" : "double-name-col";

    const colSpan = hideProductName ? 5 : 6;

    const productInfoRow = (sl, data) => {
        return <tr key={sl}>
            <td>
                <div className="sl-col">
                    {sl}
                </div>
            </td>
            {
                !hideProductName && <td>
                    <div className={nameColClass}>
                        {data.productName}
                    </div>
                </td>
            }
            <td>
                <div className={nameColClass}>
                    {data.displayName}
                </div>
            </td>
            <td>
                <div className="quantity-col">
                    {data.quantity}
                </div>
            </td>
            <td>
                <div className="price-col">
                    {data.price}
                </div>
            </td>
            <td>
                <div className="total-col">
                    {data.total}
                </div>
            </td>
        </tr>;
    }

    const brandingHeader = () => {
        return <div
            className="branding-header"
        >
            <div className="logo">
                <img
                    src="/ems.png"
                    alt="ems logo"
                />
            </div>

            <div
                className="company-info"
            >
                <h1 className="company-name single-line-ellipsis">
                    AL ZAKI AUTO SPARE PARTS TR. LLC. AL ZAKI AUTO SPARE PARTS TR. LLC. AL ZAKI AUTO
                    SPARE PARTS TR. LLC.
                </h1>
                <h4 className="m-b-8 m-t-10 double-line-ellipsis">
                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 P.O.BOX:35723,
                    TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 ACCOUNTS:06-5394409, FAX:06-5394408
                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 P.O.BOX:35723,
                    TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 ACCOUNTS:06-5394409, FAX:06-5394408
                </h4>
                <h4 className="single-line-ellipsis">
                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 P.O.BOX:35723, TEL: 06-5323414,
                    ACCOUNTS:06-5394409, FAX:06-5394408
                </h4>
                <h4 className="m-b-10 m-t-8 single-line-ellipsis">
                    P.O.BOX:35723, TEL: 06-5323414, ACCOUNTS:06-5394409, FAX:06-5394408 P.O.BOX:35723, TEL: 06-5323414,
                    ACCOUNTS:06-5394409, FAX:06-5394408
                </h4>
            </div>
        </div>;
    }

    const invoiceDetailsHeader = () => {
        return <div className="invoice-details-header">
            <div className="invoice-info">
                <p className="info-row">
                    <b>Invoice No:</b> <span>SALE_14_2024_000011</span>
                </p>
                <p className="info-row">
                    <b>Sale Date:</b> <span>27-02-2024 11:59:11</span>
                </p>
                <p className="info-row">
                    <b>Served By:</b> <span>Mehedi Hasan</span>
                </p>
                <p className="info-row">
                    <b>Payment Status:</b> <span>Unpaid</span>
                </p>
            </div>
            <div className="customer-info">
                <p className="info-row">
                    <b>Customer Name:</b> <span>Joniyed Bhuiyan</span>
                </p>
                <p className="info-row">
                    <b>Customer Number:</b> <span>+8801254125632</span>
                </p>
                <p className="info-row">
                    <b>Customer Address:</b> <span>+8801254125632</span>
                </p>
                <p className="info-row">
                    <b>Customer Balance:</b> <span>54965645646.00 (Due)</span>
                </p>
            </div>
        </div>;
    }

    function priceSummary() {
        return <div className="price-summary">
            <div className="in-word">
                <h2>Total Paid in Words</h2>
                <h3>zero TK</h3>
            </div>
            <div className="summary">
                <p className="price-row">
                    <b>Sub Total</b><span>TK 2,584,327.00</span>
                </p>
                <p className="price-row">
                    <b>Discount</b><span>TK 00.00</span>
                </p>
                <p className="price-row">
                    <b>Vat</b><span>00.00</span>
                </p>
                <p className="price-row">
                    <b>Final Price</b><span>TK 2,584,327.00</span>
                </p>
                <p className="price-row">
                    <b>Total Paid</b><span>TK 00.00</span>
                </p>
                <p className="price-row">
                    <b>Due to Paid</b><span>TK 2,584,327.00</span>
                </p>
            </div>
        </div>;
    }

    return (
        <div ref={componentRef}>
            <style>{getPageMargins()}</style>

            <table
                className="pdf-table"
            >
                <thead>
                <tr className="branding-header-tr">
                    <td colSpan={colSpan}>
                        {brandingHeader()}
                    </td>
                </tr>
                <tr className="invoice-details-header-tr">
                    <td colSpan={colSpan}>
                        {invoiceDetailsHeader()}
                    </td>
                </tr>
                <tr className="bold">
                    <td>SL.</td>
                    {
                        !hideProductName && <td>Product Name</td>
                    }
                    <td>Display Name</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
                </thead>
                <tbody>

                {
                    generateInvoiceData().map((data, i) => productInfoRow(i + 1, data))
                }
                <tr className="bold">
                    <td>SL.</td>
                    {
                        !hideProductName && <td>Product Name</td>
                    }
                    <td>Display Name</td>
                    <td>Qty</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
                <tr>
                    <td colSpan={colSpan}>
                        {priceSummary()}
                    </td>
                </tr>
                <tr>
                    <td colSpan={colSpan}>
                        <div>
                            <div className="signature-content">
                                <div className="left-signature">
                                    Signature One
                                </div>
                                <div className="right-signature">
                                    Signature Two
                                </div>
                            </div>
                            <div className="footer-info">
                                <a href="http://localhost:3000/sale-config">http://localhost:3000/sale-config</a>
                                <p>
                                    Item purchased can be exchanged within 7 days with receipt. The item purchased
                                    cannot
                                    refund in cash. Visit www.oushodsheba.com & Ordered for Home-delivery.
                                </p>
                            </div>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default PrintContent;