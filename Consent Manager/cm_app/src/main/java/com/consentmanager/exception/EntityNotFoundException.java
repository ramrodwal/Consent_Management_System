package com.consentmanager.exception;

public class EntityNotFoundException extends RuntimeException {
    
    public EntityNotFoundException(Integer consentId, Class<?> entity) { 
        super("The " + entity.getSimpleName().toLowerCase() + " with id '" + consentId + "' does not exist in our records");
}
    
}
