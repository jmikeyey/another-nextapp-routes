import { type NextRequest } from "next/server"


export async function GET(request: Request) {
  const reqHeaders = new Headers(request.headers)

  return new Response(
    `<h1>${reqHeaders.get("Authorization")?.split(" ")[1]}</h1>`,
    {
      headers: {
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark"
      },
    }
  );
}