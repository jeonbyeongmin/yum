import {init} from 'next-firebase-auth';

const initAuth = () => {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    onLoginRequestError: err => {
      console.error(err);
    },
    onLogoutRequestError: err => {
      console.error(err);
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'yum-84499',
        clientEmail:
          'firebase-adminsdk-q01nf@yum-84499.iam.gserviceaccount.com',
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: 'yum-84499.firebaseapp.com',
      projectId: 'yum-84499',
      storageBucket: 'yum-84499.appspot.com',
      messagingSenderId: '511920369786',
      appId: '1:511920369786:web:ae899240d942a7d6504bc3',
    },
    cookies: {
      name: 'yum',
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true,
      signed: true,
    },
    onVerifyTokenError: err => {
      console.error(err);
    },
    onTokenRefreshError: err => {
      console.error(err);
    },
  });
};

export default initAuth;
