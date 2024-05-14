import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const query = params.get('query')
  const filteredCommnet = query ? comments.filter((comment) => comment.text.includes(query)) : comments
  return Response.json(filteredCommnet);
}

export async function POST(request: Request){
  const comment = await request.json()
  const newComment = {
    id: comments.length + 1,
    text: comment.text
  }
  comments.push(newComment)
  return new Response(JSON.stringify(newComment), {
    status: 201
  })
}