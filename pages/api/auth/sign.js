import { unauthorized, badRequest } from 'lib/response';

export default async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return badRequest(res);
  }

  return unauthorized(res);
};
