class FakeResponse {
    constructor() {
        this.result = {};
    }
    send(object) {
        if(object) {
            this.result = object.toJSON();
        }
    }
}

module.exports = FakeResponse;