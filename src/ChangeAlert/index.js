import React from "react";
import { withStorageListener } from "./withStorageListener";

import './ChangeAlert.css';


function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg" >
                <div className="ChangeAlert-container" >
                    <p>Los TODOs fueron actualizados desde otro TAB o Ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false) }
                    >
                        Si !!!
                    </button>
                </div>
            </div>
        );
    }
    else
    {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };