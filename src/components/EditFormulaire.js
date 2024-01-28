// EditFormulaire.js
import React from "react";

export default function editFormulaire({ handleEditSubmit, selectedEditData }) {
    return (
        <>
            <h3>Edit FORM :</h3>
            <form onSubmit={(e) => handleEditSubmit(e, selectedEditData.id)}>
                Nom:<input type="text" name='nom' defaultValue={selectedEditData.nom}/><br></br>
                Prenom:<input type="text" name='prenom' defaultValue={selectedEditData.prenom}/>
                Email:<input type="email" name='mail' defaultValue={selectedEditData.mail}/>
                <button type="submit">EDIT</button>
            </form>
        </>
    );
}
