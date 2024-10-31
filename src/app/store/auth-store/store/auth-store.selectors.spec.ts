import {
  getLoading,
  getLoaded,
  getServerError,
  getAuthData,
  getAccessToken,
  getLogin,
  isAuth,
  isAuthData,
} from "./auth-store.selectors";
import { fakeAuthData, fakeAuthState } from "test/auth-store-mock";

describe("Selectors", () => {

  it("getLoading should select field (loading)", () => {
    const result = getLoading.projector(fakeAuthState)
    expect(result).toEqual(true);
  });

  it("getLoaded should select field (loaded)", () => {
    const result = getLoaded.projector(fakeAuthState)
    expect(result).toEqual(true);
  });

  it("getServerError should select field (serverError)", () => {
    const result = getServerError.projector(fakeAuthState)
    expect(result).toEqual('server error');
  });

  it("getAuthData should select field (authData)", () => {
    const result = getAuthData.projector(fakeAuthState)
    expect(result).toEqual(fakeAuthData);
  });

  it("getAccessToken should select field (accessToken)", () => {
    const result = getAccessToken.projector(fakeAuthState.authData)
    expect(result).toEqual(fakeAuthData.accessToken);
  });

  it("getLogin should select field (login)", () => {
    const result = getLogin.projector(fakeAuthState.authData)
    expect(result).toEqual(fakeAuthData.login);
  });

  it("isAuth should select to true if signed in", () => {
    const result = isAuth.projector(fakeAuthState)
    expect(result).toEqual(true);
  });

  it("isAuthData should set to true if AuthData is received", () => {
    const result = isAuthData.projector(fakeAuthState)
    expect(result).toEqual(true);
  });
});
