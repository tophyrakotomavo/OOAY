import { type NextRequest } from 'next/server'

export const GET = (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get('value')
  return Response.json({ hello: 'word', value: query});
};
