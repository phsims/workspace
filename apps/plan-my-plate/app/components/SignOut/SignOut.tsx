import {  Button } from '@workspace/components';
import { signOut } from '../../auth';


export function SignOut() {
    return (
      <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}

export default SignOut;
