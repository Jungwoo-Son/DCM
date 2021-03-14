class MismatchBetweenIdAndObjectException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = {
    MismatchBetweenIdAndObjectException,
}