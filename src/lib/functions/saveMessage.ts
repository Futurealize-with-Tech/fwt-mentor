//生成した画像を表示しないで保存させるコード（画像が生成できないため、動くかわからない）
export const saveMessage = async ({
  memberName,
  type,
  generateImgFunc,
}: {
  memberName: string,
  type: string,
  generateImgFunc: string,
}) => {
  const imgUrl = generateImgFunc;

  const downloadLink = document.createElement('a');
  downloadLink.href = imgUrl;
  downloadLink.download = `${memberName}-${type}.svg`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
