import html2canvas from "html2canvas";
import { cardId, textCardId } from "../data/cardId";

//生成した画像を表示しないで保存させるコード（画像が生成できないため、動くかわからない）
export const saveMessage = async ({
  messageId,
  memberName,
  type,
}: {
  messageId: number,
  memberName: string,
  type: string,
}) => {
  const idName = type === 'text' ? textCardId : cardId;
  const target = document.getElementById(`${idName}-${messageId}`);
  if (target == null) return;

  html2canvas(target, {
    scale: 1,
    useCORS: true,
    allowTaint: false,
  }).then((canvas) => {
    const imgData = document.createElement('a');
    imgData.href = canvas.toDataURL('image/png');
    imgData.download = `${memberName}-${type}.png`;
    imgData.click();
  });
};
