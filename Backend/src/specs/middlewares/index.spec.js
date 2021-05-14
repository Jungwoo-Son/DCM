jest.mock("../../configs");
process.env.TOKEN_SECRET = "token_secret";
jest.spyOn(Date, "now").mockImplementation(() => 1620958580000);

const { AccessTokenExtractor } = require("../../apis/middlewares");
const FakeRequestBuilder = require("../controllers/FakeRequest");
const FakeResponse = require("../controllers/FakeResponse");
const sample_stringified_access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJ1c2VyX2lkIjoiMSIsImlhdCI6MTYyMDk1ODU4MCwiZXhwIjoxNjIxNTYzMzgwfQ.1pYiXZBxfJidUUvzgMTIjCp9hfn63HpPpgSmWVebeeQ";

describe("미들웨어에 대한 단위 테스트", () => {
  describe("AccessTokenExtractor 테스트", () => {
    it("엑세스 토큰 객체 발행 성공", async () => {
      const req = new FakeRequestBuilder()
        .setHeader({ Authorization: sample_stringified_access_token })
        .build();
      const res = new FakeResponse();
      await AccessTokenExtractor(req, res);

      const objectified_token = req.auth;

      expect(objectified_token).toBe("1");
    });
  });
});
