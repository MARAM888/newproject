import React, { useEffect, useState } from "react";
import { getFormulaire, addFormulaire, editFormulaire, deleteFormulaire } from "../services/ApiService";
import AddFormulaire from "./AddFormulaire";
import EditFormulaire from "./EditFormulaire";
import "./FormulaireList.css"; 


export default function FormulaireList() {
    const [formulaires, setFormulaires] = useState([]);
    const [showAddFormulaireForm, setShowAddFormulaireForm] = useState(false);
    const [showEditFormulaireForm, setShowEditFormulaireForm] = useState(false);
    const [selectedEditData, setSelectedEditData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        getFormulaire()
            .then(res => {
                if (isMounted) {
                    console.log("res from Api ", res);
                    setFormulaires(res || []); // Ensure setFormulaires receives an array
                }
            })
            .catch(error => {
                console.error("Error fetching formulaires:", error);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleAddSubmit = (e) => {
        e.preventDefault();
        addFormulaire(e.target)
            .then(res => {
                setFormulaires([...formulaires, res]);
                setShowAddFormulaireForm(false);
            })
            .catch(error => {
                console.error("Error adding formulaire:", error);
            });
    };

    const handleEditBtn = (formulaire) => {
        setSelectedEditData(formulaire);
        setShowEditFormulaireForm(true);
        setShowAddFormulaireForm(false);
    };

    const handleEditSubmit = (e, id) => {
        e.preventDefault();
        editFormulaire(id, e.target)
            .then(res => {
                setFormulaires(res || []); // Ensure setFormulaires receives an array
                setShowEditFormulaireForm(false);
                setSelectedEditData(null);
            })
            .catch(error => {
                console.error("Error editing formulaire:", error);
            });
    };

    const handleDelete = (id) => {
        deleteFormulaire(id)
            .then(() => {
                setFormulaires(formulaires.filter(formulaire => formulaire.id !== id));
            })
            .catch(error => {
                console.error("Error deleting formulaire:", error);
            });
    };

    return (
        <>
            <h3>Formulaire</h3>
            <table className="formulaire-table" border={"2px"} cellPadding={"10px"}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(formulaires) && formulaires.length > 0 ? (
                        formulaires.map(formulaire => (
                            <tr key={formulaire.id}>
                                <td>{formulaire.nom}</td>
                                <td>{formulaire.prenom}</td>
                                <td>{formulaire.mail}</td>
                                <td>
                                    <button onClick={() => handleEditBtn(formulaire)}>Edit</button>
                                    <button onClick={() => handleDelete(formulaire.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setShowAddFormulaireForm(true)}>Insci Dans Notre Site</button>
            {showAddFormulaireForm && <AddFormulaire handleAddSubmit={handleAddSubmit} />}
            {showEditFormulaireForm && <EditFormulaire handleEditSubmit={handleEditSubmit} selectedEditData={selectedEditData} />}
        </>
    );
}
