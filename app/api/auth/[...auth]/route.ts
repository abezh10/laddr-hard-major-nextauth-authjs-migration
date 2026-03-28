export async function GET() {
  return Response.json({
    ok: true,
    message: "Starter route for Major NextAuth/Auth.js Migration",
  });
}

export async function POST() {
  return Response.json({
    ok: false,
    message: "This starter route is intentionally incomplete.",
  });
}
