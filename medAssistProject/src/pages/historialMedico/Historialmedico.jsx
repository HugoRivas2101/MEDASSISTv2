// frontend/src/components/MedicalHistory.js
/*
import React, { useEffect, useState } from "react";
import api from "../services/api";

function MedicalHistory() {
    const [records, setRecords] = useState([]);
    const [editRecord, setEditRecord] = useState(null); // Registro que se está editando
    const [updatedRecord, setUpdatedRecord] = useState({ condition: "", treatment: "", notes: "" });
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await api.get("/medical_history/");
                setRecords(response.data);
            } catch (error) {
                console.error("Error al cargar el historial médico", error);
            }
        };
        fetchHistory();
    }, []);

    // Iniciar edición de un registro
    const startEdit = (record) => {
        setEditRecord(record.id);
        setUpdatedRecord({
            condition: record.condition,
            treatment: record.treatment,
            notes: record.notes,
        });
    };

    // Manejar cambios en el formulario de edición
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRecord((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Guardar los cambios en el registro editado
    const saveEdit = async () => {
        try {
            await api.put(`/medical_history/${editRecord}`, updatedRecord);
            setRecords(records.map((record) =>
                record.id === editRecord ? { ...record, ...updatedRecord } : record
            ));
            setEditRecord(null); // Finalizar la edición
        } catch (error) {
            console.error("Error al actualizar el registro", error);
        }
    };

    return (
        <div>
            <h2>Historial Médico</h2>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        {editRecord === record.id ? (
                            <div>
                                <input
                                    type="text"
                                    name="condition"
                                    value={updatedRecord.condition}
                                    onChange={handleChange}
                                    placeholder="Condición"
                                />
                                <input
                                    type="text"
                                    name="treatment"
                                    value={updatedRecord.treatment}
                                    onChange={handleChange}
                                    placeholder="Tratamiento"
                                />
                                <textarea
                                    name="notes"
                                    value={updatedRecord.notes}
                                    onChange={handleChange}
                                    placeholder="Notas"
                                ></textarea>
                                <button onClick={saveEdit}>Guardar</button>
                                <button onClick={() => setEditRecord(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <strong>Condición:</strong> {record.condition} <br />
                                <strong>Tratamiento:</strong> {record.treatment} <br />
                                <strong>Notas:</strong> {record.notes} <br />
                                <button onClick={() => startEdit(record)}>Editar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MedicalHistory;

*/