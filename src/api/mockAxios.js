import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const mock = new MockAdapter(axios);

mock
  .onPost("/login", {
    password: "user1",
    email: "user@mail.com"
  })
  .reply(200)
  .onAny("/login")
  .reply(401, { error: "The username or password is incorrect" });

export default axios;
