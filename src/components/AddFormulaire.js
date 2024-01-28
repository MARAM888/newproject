// AddFormulaire.js
import React from "react";

export default function AddFormulaire({ handleAddSubmit }) {
    return (
        <>
            <h3 className="titre">Inscpitipon</h3>
            <form onSubmit={handleAddSubmit}>
                <div className="inputt">
                Nom:<input type="text" name='nom' className="in"/>
                Prenom:<input type="text" name='prenom' className="in"/>
                Email:<input type="email" name='mail' className="in"/>
                </div>
                <button type="submit"className="btn">ADD</button>
            </form>
        </>
    );
}
