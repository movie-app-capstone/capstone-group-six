class HttpError extends Error {
    //  adds a message & error code property to the error object
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

module.exports = HttpError;