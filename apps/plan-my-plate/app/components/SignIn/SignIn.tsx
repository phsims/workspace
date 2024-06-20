
import React from 'react';
import {  Button } from '@workspace/components';
import { signIn } from '../../auth';

export function SignIn() {
  return (
    <form
    action={async () => {
      'use server';
      await signIn();
    }}
  >
    <Button type="submit">Sign in</Button>
  </form>
  );
}

export default SignIn;
