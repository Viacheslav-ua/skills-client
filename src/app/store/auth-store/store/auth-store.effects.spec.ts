import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, on, Store } from '@ngrx/store';
import { Observable, of, switchMap, tap, throwError } from 'rxjs';
// import * as rxjs from 'rxjs';
import { fakeAuthData } from 'test/auth-store-mock';
import { fakeStorage } from 'test/local-storage-mock';
import { AuthService } from '../services/auth.service';
import { AuthEffects } from './auth-store.effects';

describe('Auth Effects', () => {
  let actions$ = new Observable<Action>()
  let effects: AuthEffects

  const fakeAuthService = jasmine.createSpyObj(['login', 'register', 'refresh', 'isAuth$' ])
  const fakeStore = jasmine.createSpyObj(["dispatch", "pipe"])
  const fakeRouter = jasmine.createSpyObj(['url', 'navigateByUrl'])
  // const fakeRxjs = jasmine.createSpyObj(['fromEvent'])


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: fakeAuthService },
        { provide: Router, useValue: fakeRouter },
        { provide: Store, useValue: fakeStore },
        { provide: Storage, useValue: fakeStorage },
        // { provide: rxjs, useValue: fakeRxjs },
      ],
    })

    // spyOn(rxjs, 'fromEvent').and.callFake(fakeRxjs.fromEvent);
    spyOn(localStorage, 'getItem').and.callFake(fakeStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(fakeStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(fakeStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(fakeStorage.clear);
    localStorage.clear()

    effects = TestBed.inject(AuthEffects)


  })

  it('check login$ success', done => {
    actions$ = of({ type: '[Auth] Login' });
    fakeAuthService.login.and.returnValue(of(fakeAuthData))

    effects.login$.subscribe(action => {
      expect(action).toEqual({
        type: '[Auth] Login Success',
        authData: fakeAuthData,
      })

      expect(fakeRouter.navigateByUrl).toHaveBeenCalledWith('main')
      done();
    })
  })

  it('check login$ error', done => {
    actions$ = of({ type: '[Auth] Login' });
    fakeAuthService.login.and.returnValue(throwError(() => new Error('error')))

    effects.login$.subscribe({
      error: (er) => {
        expect(er).toBe(er)
        done()
      }
    })

  })

  it('check register$ success', done => {
    actions$ = of({ type: '[Auth] Register' });
    fakeAuthService.register.and.returnValue(of(fakeAuthData))

    effects.register$

    .subscribe(action => {
      expect(action).toEqual({
        type: '[Auth] Login Success',
        authData: fakeAuthData,
      })

      expect(fakeRouter.navigateByUrl).toHaveBeenCalledWith('main')
      done();
    })
  })

  it('check register$ error', done => {
    actions$ = of({ type: '[Auth] Register' });
    fakeAuthService.register.and.returnValue(throwError(() => new Error('error')))

    effects.register$.subscribe({
      error: (er: any) => {
        expect(er).toBe(er)
        done()
      }
    })

  })

  it('check refresh$ success', fakeAsync(() => {
    const data = {...fakeAuthData, exp: (Date.now()/1000 + 360)}
    actions$ = of({ type: '[Auth] Login Success', authData: data })

    fakeAuthService.refresh.and.returnValue(of(fakeAuthData))
    fakeStore.pipe.and.returnValue(of(1))

    effects.refresh$

      .subscribe(action => {
      expect(action).toEqual({
        type: '[Auth] Login Success',
        authData: fakeAuthData,
      })
    })
    tick(300000)
  }))

  it('check saveAuthDataToLocalStorage$', done => {
    actions$ = of({ type: '[Auth] Login Success', authData: fakeAuthData});

    effects.saveAuthDataToLocalStorage$
      .subscribe(action => {
        expect(localStorage.getItem('authData')).toEqual(JSON.stringify(action.authData))
        done()
      })
  })

  it('check extractLoginData$ Login Success', done => {
    actions$ = of({ type: '[Auth] Init Auth'});
    const data = { ...fakeAuthData, exp: Math.ceil(Date.now() / 1000 + 500) }
    localStorage.setItem('authData', JSON.stringify(data))

    effects.extractLoginData$
      .subscribe(action => {
        expect(action).toEqual({
          type: '[Auth] Login Success',
          authData: data
        })
        done()
      })
  })

  it('check extractLoginData$ Logout if token is null', done => {
    actions$ = of({ type: '[Auth] Init Auth'});
    effects.extractLoginData$
      .subscribe(action => {
        expect(action).toEqual({
          type: '[Auth] Logout Success',
        })
        done()
      })
  })

  it('check extractLoginData$ Logout if old token', done => {
    actions$ = of({ type: '[Auth] Init Auth'});
    localStorage.setItem('authData', JSON.stringify(fakeAuthData))
    effects.extractLoginData$
      .subscribe(action => {
        expect(action).toEqual({
          type: '[Auth] Logout Success',
        })
        done()
      })
  })

  xit('check listenStorageEffect$', done => {
    actions$ = of({ type: '[Auth] Init Auth' });
    // fakeRxjs.fromEvent.and.returnValue(of(1))

    // spyOnProperty(fakeRxjs, 'fromEvent').and.returnValue(() => rxjs.of(1));

    // window.dispatchEvent(new StorageEvent('storage', {
    //   key: 'test_key',
    //   newValue: 'test_value'
    // }))
    effects.listenStorageEffect$.subscribe(
      (action) => {
        expect(action).toEqual({
          type: '[Auth] Extract Login Data'
        });
        done()
      }
    )
  })

  xit('check listenAuthorizeEffect$', done => {
    actions$ = of({ type: '[Auth] Init Auth' })
    // fakeAuthService.isAuth$.and.returnValue(of(true))

    effects.listenAuthorizeEffect$
      .subscribe(
      (action) => {
        expect(action).toEqual(false);
        done()
      }
    )
  })

  it('check skipServerError$', done => {
    actions$ = of({ type: '[Auth] Login Skip Error' })
    effects.skipServerError$
      .subscribe(action => {
        expect(action).toEqual({
          type: '[Auth] Login Failed',
          serverError: '',
        })
        done()
      }
    )
  })

  it('check logout$ should remove localStorage item', done => {
    actions$ = of({ type: '[Auth] Logout'});
     localStorage.setItem('authData', JSON.stringify(fakeAuthData))
     expect(localStorage.getItem('authData')).toEqual(JSON.stringify(fakeAuthData))


    effects.logout$
      .subscribe((action) => {
        expect(localStorage.getItem('authData')).toEqual(null)
        expect(action).toEqual({
          type: '[Auth] Logout Success',
        })
        done()
      })
  })
})
