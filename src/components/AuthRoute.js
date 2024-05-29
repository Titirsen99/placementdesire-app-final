// src/components/AuthRoute.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';

const AuthRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/prepare');
    } else {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return <>{children}</>;
};

export default AuthRoute;
