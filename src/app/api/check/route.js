import { getServerSession } from 'next-auth';

export async function GET(req) {
    const session = await getServerSession({ req });

    if (!session) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    return new Response(JSON.stringify({ session }), { status: 200 });
}
