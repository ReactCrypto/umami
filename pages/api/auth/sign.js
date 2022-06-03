import { createAccount } from 'lib/queries';
import { hashPassword } from 'lib/crypto';
import { ok, unauthorized, badRequest } from 'lib/response';

export default async (req, res) => {
  const { account, username, password } = req.body;

  if (!username || !password || !account) {
    return badRequest(res);
  }

  const created = await createAccount({ username, password: hashPassword(password) });
  if (created) {
    return ok(res, created);
  }
  return unauthorized(res);
};
