package com.patient.patient_app.exception;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String patientAadhar, Class<?> entity) {
        super("The " + entity.getSimpleName().toLowerCase() + " with id '" + patientAadhar
                + "' does not exist in our records");
    }

}
