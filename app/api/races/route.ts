export async function GET(request:Request) {
    const races = [{name:'La etapa La Paz'}];

    return new Response(JSON.stringify(races))
}