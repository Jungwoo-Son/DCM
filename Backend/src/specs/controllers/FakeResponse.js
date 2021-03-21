class FakeResponse {
    constructor() {
        this.result = {};
    }
    send(object) {
        if(object instanceof Array) {
            this.result = object.map((o) => o.toJSON());
        }
        else if(object) {
            this.result = object.toJSON();
        }
    }
}

module.exports = FakeResponse;