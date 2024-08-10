import { gallary } from '@/data/gallary';
import { kv } from '@vercel/kv';
import { getServerSession } from 'next-auth';

export async function POST(req) {
  const session = await getServerSession({ req });

  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  console.log(kv)

  const userKey = `rate_limit:${session.user.email}`;
  const userRate = await kv.get(userKey);

  if (userRate && userRate >= 3) {
    return new Response(JSON.stringify({ error: 'Rate limit exceeded! Come after hour!' }), { status: 429 });
  }

  await kv.incr(userKey);
  await kv.expire(userKey, 3600);

  const randomImage = gallary[Math.floor(Math.random() * gallary.length) % 14];
  console.log(randomImage)

  return new Response(JSON.stringify({ image: randomImage.path, alt: randomImage.alt, session }), { status: 200 });
}
