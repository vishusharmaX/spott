# Spott

A modern, full-stack Next.js 16 application built with cutting-edge technologies like React 19, Clerk Authentication, Convex Backend, TailwindCSS, Radix UI, and Google Generative AI. This project follows the App Router structure and supports server components, dynamic routing, and optimized fonts.

![Spott Preview](https://github.com/user-attachments/assets/5c0c299a-f723-4661-a72a-c2cce16b2cc9)

## 🚀 Features

- **⚛️ Next.js 16 + React 19** — App Router, Server Components
- **🔐 Clerk Authentication** — Secure signup/login
- **🤖 Google Generative AI Integration**
- **🔄 Convex Backend** — Real-time functions & DB
- **🧩 Reusable UI Components** with Radix UI
- **🎨 TailwindCSS 4 + Dark Mode** (next-themes)
- **📅 React Day Picker** for date-based UI
- **🌍 Country-State-City API**
- **🔄 Forms** with React Hook Form + Zod Validation
- **🧾 QR Code generation** using react-qr-code
- **✨ Animations** with tw-animate-css

## 📦 Tech Stack

| Category               | Technology                          |
|------------------------|-------------------------------------|
| Frontend Framework     | Next.js 16, React 19                |
| Styling                | TailwindCSS 4, clsx, tailwind-merge, tw-animate-css |
| UI Components          | Radix UI, Lucide Icons              |
| Authentication         | Clerk                               |
| Backend (Hosted Functions) | Convex                          |
| Form Management        | React Hook Form + Zod + @hookform/resolvers |
| AI Integration         | Google Generative AI SDK           |
| Utilities              | date-fns, react-day-picker, country-state-city |
| Others                 | react-spinners, react-qr-code       |

## 🛠️ Installation & Setup (Local Machine)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/spott.git
   cd spott

2. **Install dependencies**
   You can use npm, yarn, pnpm, or bun:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set environment variables**
   Create a `.env.local` file in the root folder:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   GOOGLE_API_KEY=
   CONVEX_URL=
   ```
   *(Replace values with your actual API keys)*

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser at: [http://localhost:3000](http://localhost:3000)

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
spott/
│── app/
│   ├── page.js
│   ├── api/
│   └── (components/pages)
│
│── components/
│── convex/
│── public/
│── styles/
│── package.json
│── tailwind.config.js
│── README.md
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
