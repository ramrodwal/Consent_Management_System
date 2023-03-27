package com.consentmanager.exception;

public class EntityNotFoundException extends RuntimeException {
    
    public EntityNotFoundException(Integer consent_id, Class<?> entity) { 
        super("The " + entity.getSimpleName().toLowerCase() + " with id '" + consent_id + "' does not exist in our records");
}
    
}
