// 画像が返ってくるかテストする用のページ作ったけど、多分いらん
export default async function Test({ params } : { params: { id: string } }) {
  const { id } = params;
  const messageImg = await fetch(`/api/message/${id}`);
  console.log(messageImg);
  return <div></div>;
}
