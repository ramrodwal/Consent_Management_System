package com.patient.patient_app.exception;

public class EntityNotFoundException extends RuntimeException{
    
    public EntityNotFoundException(String patient_aadhar, Class<?> entity) { 
        super("The " + entity.getSimpleName().toLowerCase() + " with id '" + patient_aadhar + "' does not exist in our records");
}

}
