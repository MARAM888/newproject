import React from "react";
import { deleteFormulaire } from "../services/ApiService";

export default function DeleteFormulaire({ id, onDelete }) {
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this formulaire?")) {
            deleteFormulaire(id)
                .then(() => {
                    onDelete(id); // Callback to update state in parent component after deletion
                    console.log("Formulaire deleted successfully");
                })
                .catch(error => {
                    console.error("Error deleting formulaire:", error);
                });
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}
