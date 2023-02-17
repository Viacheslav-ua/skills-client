import { fakeAuthData } from 'test/store-mock'
import { loginSuccess, login, loginFailed, logoutSuccess, register } from './auth-store.actions'
import * as fromReducer from './auth-store.reducer'


describe('AuthReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.authReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('login action', () => {
    it('should set (loading: true) and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        ...initialState,
        loading: true,
      }

      const action = login({ login: 'login', password: 'password' })
      const state = fromReducer.authReducer(initialState, action)

      expect(state).toEqual(newState)
      expect(state).not.toBe(initialState)
    })
  })

  describe('loginSuccess action', () => {
    it('should retrieve auth data and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        ...initialState,
        loading: false,
        loaded: true,
        loadAuthData: true,
        serverError: '',
        authData: fakeAuthData,
      }

      const action = loginSuccess({authData: fakeAuthData})
      const state = fromReducer.authReducer(initialState, action)

      expect(state).toEqual(newState)
      expect(state).not.toBe(initialState)
    })
  })

  describe('loginFailed action', () => {
    it('should set the state on error in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        ...initialState,
        authData: null,
        loaded: true,
        loadAuthData: true,
        loading: false,
        serverError: 'server error'
      }

      const action = loginFailed({serverError: 'server error'})
      const state = fromReducer.authReducer(initialState, action)

      expect(state).toEqual(newState)
      expect(state).not.toBe(initialState)
    })
  })

  describe('logoutSuccess action', () => {
    it('should set the state on logout success in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        ...initialState,
        loadAuthData: true,
        authData: null,
      }

      const action = logoutSuccess()
      const state = fromReducer.authReducer(initialState, action)

      expect(state).toEqual(newState)
      expect(state).not.toBe(initialState)
    })
  })

  describe('register action', () => {
    it('should set (loading: true) and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState = {
        ...initialState,
        loading: true,
      }

      const action = register({ login: 'login', password: 'password' })
      const state = fromReducer.authReducer(initialState, action)

      expect(state).toEqual(newState)
      expect(state).not.toBe(initialState)
    })
  })

})
