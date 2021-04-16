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
    status(s) {
        this.s = s;
    }
    getStatus() {
        return this.s;
    }
}

module.exports = FakeResponse;