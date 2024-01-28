// ApiService.js
import axios from "axios";

export function getFormulaire() {
    return axios.get('http://127.0.0.1:8000/Formulaire/')
        .then(res => {
            // Extract and return the data from the response
            return res.data;
        })
        .catch(error => {
            // Handle errors
            throw error;
        });
}

export function addFormulaire(formulaire) {
    return axios.post('/Formulaire/', {
        nom: formulaire.nom.value,
        prenom: formulaire.prenom.value,
        mail: formulaire.mail.value,
    })
    .then(res => {
        // Extract and return the data from the response
        return res.data;
    })
    .catch(error => {
        // Handle errors
        throw error;
    });
}
export function editFormulaire(id,formulaire) {
    return axios.put('http://127.0.0.1:8000/Formulaire/'+id+'/', {
        nom: formulaire.nom.value,
        prenom: formulaire.prenom.value,
        mail: formulaire.mail.value,
    })
    .then(res => {
        // Extract and return the data from the response
        return res.data;
    })
    .catch(error => {
        // Handle errors
        throw error;
    });
}
export function deleteFormulaire(id) {
    return axios.delete(`http://127.0.0.1:8000/Formulaire/${id}/`)
        .then(res => {
            // Extract and return the data from the response
            return res.data;
        })
        .catch(error => {
            // Handle errors
            throw error;
        });
}

