import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { getMessage } from "@/utils/getMessage";
import { MessageShowType } from "@/types/messageType";

// テキストベース画像生成用API
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  // messageデータを取得
  const messageData = await getMessage(params.id);
  const message = messageData.message as MessageShowType;
  console.log(message);

  // if (message) {
    return new ImageResponse(
      (
        <div
          style={{
            boxSizing: 'border-box',
            width: 595,
            minHeight: 845,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(215, 215, 215)',
            position: 'relative',
          }}
        >
          <img
            src='/public/card/decoration/text-card-top.png'
            alt='top'
            width={595}
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '130px 20px 180px',
              paddingTop: '130px',
              paddingBottom: '180px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: '700',
                backgroundColor: 'rgb(255, 255, 255, 0.8)',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              {message.mentor.name}
            </div>
          </div>
          <img
            src='/public/card/decoration/text-card-bottom.png'
            alt='bottom'
            width={595}
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          />
        </div>
      ),
      {
        width: 595,
      },
    );
  // } else {
  //   return new Response('Not Found', { status: 404 });
  // }
}
