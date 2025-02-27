# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


# cấu trúc

src/
│── assets/               # Chứa hình ảnh, fonts, v.v.
│── components/           # Chứa các UI component dùng chung
│   ├── Layout/           # Chứa các layout chính
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│── hooks/                # Chứa custom hooks (useAppDispatch, useAppSelector)
│── pages/                # Chứa các trang chính
│── i18n/                 # Chứa cấu hình i18n
│   ├── auth/             # Trang đăng nhập, đăng ký
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   ├── dashboard/        # Trang sau khi login
│   │   ├── Dashboard.tsx
│── store/                # Chứa Redux store, slices
│── styles/               # Chứa file CSS, Tailwind config
│── App.tsx               # Component gốc
│── main.tsx              # Entry point


# Tài khoản đang nhập 
diepxinh@gmail.com/hat260301
