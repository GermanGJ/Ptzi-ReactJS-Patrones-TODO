import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return <p>Hubo Cambios</p>;
    }
    else
    {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };