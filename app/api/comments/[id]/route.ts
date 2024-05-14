import { comments } from "../data";


export async function GET(
  _request: Request, { params }: { params: {id: string}}
) {
  const comment = comments.find((comment) => comment.id === parseInt(params.id))
  if(!comment){
    return new Response(JSON.stringify({ msg: "Not Found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }
  return Response.json(comment)
}

export async function PATCH(request: Request, {params}: {params: {id: string}}){
  const body = await request.json()
  const { text } = body;
  const index = comments.findIndex((index) => index.id === parseInt(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex((index) => index.id === parseInt(params.id));
  if (index === -1) {
    return new Response(JSON.stringify({ msg: "Not Foud" }), {
      status: 400,
    });
  }
  const deletedComment = comments[index]
  comments.splice(index, 1)
  return Response.json({comments, deletedComment});
}