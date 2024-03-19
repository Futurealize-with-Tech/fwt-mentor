# Featurealize-with-Tech (メンターサイド)

## 📁 ファイル構成

    .
    ├── public/
    │   ├── next.svg
    │   └── vercel.svg
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── template.tsx
    │   │   ├── page.tsx
    │   │   ├── global.scss
    │   │   ├── page.module.scss
    │   │   ├── favicon.ico
    │   │   ├── apple-touch-icon.png
    │   │   ├── opengraph-image.png
    │   │   └── twitter-image.png
    │   │
    │   ├── components/（以下のファイルは頭文字大文字）
    │   │   ├── Card/
    │   │   │   ├── IndexCard.tsx
    │   │   │   ├── FocusCard.tsx
    │   │   │   └── card.module.scss
    │   │   │
    │   │   └── UI/ (ボタンなど細々したUI)
    │   │       ├── Animation/（Lottieのコンポーネント）
    │   │       ├── Button/
    │   │       │   ├── SelectDownloadTypeButton.tsx
    │   │       │   └── button.module.scss
    │   │       ├── Form/
    │   │       │   ├── SelectMemberForm.tsx
    │   │       │   └── form.module.scss
    │   │       ├── Modal/
    │   │       │   ├── SelectDownloadTypeModal.tsx
    │   │       │   └── modal.module.scss
    │   │       └── Screen/
    │   │           ├── BlessingScreen.tsx
    │   │           └── screen.module.scss
    │   │
    │   ├── lib/（配列や関数などの処理）
    │   │   ├── Function/（関数）
    │   │   ├── Image/（画像配列）
    │   │   ├── Key/（ローカルストレージなどのkey）
    │   │   └── Site/（メディアのURL）
    │   │
    │   └── type/ (型定義)
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json
