import { auth } from '../../auth';

import { SignIn } from '../SignIn/SignIn';
import { SignOut } from '../SignOut/SignOut';

export default async function AuthComponent() {
  const session = await auth();

  if(session) return <SignOut />

  if(!session) return <SignIn />
  
  return 
}
