class FakeRequest {
    constructor(data) {
        this.body = data.body;
        this.params = data.params;
        this.auth = data.auth;
    }
}
class FakeRequestBuilder {
    setParams(params) {
        this.params = params;
        return this;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    setAuth(auth) {
        this.auth = auth;
        return this;
    }
    build() {
        return new FakeRequest(this);
    }
}

module.exports = FakeRequestBuilder;