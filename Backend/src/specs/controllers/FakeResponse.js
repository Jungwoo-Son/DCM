class FakeResponse {
    constructor() {
        this.result = {};
    }
    send(object) {
        this.result = object.toJSON();
    }
}

module.exports = FakeResponse;