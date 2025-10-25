# 🌙 noctra-react-starter

**noctra-react-starter** is a modern React + TypeScript starter built with **Vite**, **Tailwind CSS**, **Zustand**, **Zod**, **React Hook Form**, and **Radix UI**.  
It’s designed for scalability, modularity, and developer productivity — perfect for starting modern web apps fast.

---

## 🚀 Tech Stack

- ⚛️ **React 19** + **Vite 7** (blazing-fast dev server & build)
- 💅 **Tailwind CSS 4** with `class-variance-authority` & `tailwind-merge`
- 🎨 **Radix UI**, **Lucide Icons**, **Framer Motion**
- 🧠 **Zustand** for global state management
- 🧾 **React Hook Form** + **Zod** for form handling and validation
- 🔄 **React Router v7**
- 💬 **Sonner** for elegant toast notifications
- 🌗 **next-themes** for dark/light theme toggling
- ✅ **TypeScript** + **ESLint** (configured for modern React)

---

## 📁 Folder Structure

```
src/
├─ config/ # Global configuration (routes, constants, etc.)
├─ features/ # Feature-based architecture
│ └─ [feature]/
│   ├─ guards/ # Route guards and auth protection
│   ├─ hooks/ # Auth-specific hooks
│   ├─ screens/ # Login and Signup screens
│   ├─ stores/ # Zustand stores for auth
│   └─ typings/ # Type definitions (login.ts, user.ts, etc.)
│
├─ shared/ # Reusable code across features
│ ├─ assets/
│ │ ├─ images/
│ │ └─ styles/
│ ├─ components/ # Shared UI components (buttons, inputs, etc.)
│ ├─ hooks/ # Shared reusable hooks
│ ├─ layouts/ # Reusable layout components
│ ├─ stores/ # Global Zustand stores (if needed)
│ └─ lib/ # Utility functions / helpers
│
└─ main.tsx # App entry point
```


---

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/noctra-cc/noctra-react-starter.git
cd noctra-react-starter
```

### 2️⃣ Install dependencies
```bash
# npm
npm install
# or yarn
yarn
# or pnpm
pnpm install
# or bun
bun install
```

### 3️⃣ Configure environment variables
```bash
cp .env.example .env
# then edit .env with your environment-specific values
```

### 4️⃣ Run the development server
```bash
# npm
npm run dev
# or bun
bun run dev
```
Vite will start a local dev server, usually at
👉 http://localhost:5173

## 🧱 Available Scripts

| Script | Description |
|--------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build the project |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

---

## 🧩 Key Libraries

| Purpose | Library |
|----------|----------|
| UI components | Radix UI, Lucide React |
| Styling | Tailwind CSS 4, class-variance-authority |
| State management | Zustand |
| Forms & validation | React Hook Form + Zod |
| Routing | React Router v7 |
| Animations | Framer Motion |
| Notifications | Sonner |
| Themes | next-themes |

---

## 🧠 Project Philosophy

This starter embraces:

- **Feature-based architecture** → scalable, isolated modules per domain  
- **Type safety** → strong typing via TypeScript and Zod  
- **Composable UI** → built around reusable, styled, and animated components  
- **Performance-first** → powered by Vite and React 19  
- **DX optimized** → hot reload, linting, and predictable folder structure  

---

## 🧰 Recommended Extensions (VS Code)

- Tailwind CSS IntelliSense  
- ESLint  
- Prettier  
- TypeScript React (tsx)  
- Icons by Iconify  

---

**Made with ❤️ and ☕ by Noctra**
