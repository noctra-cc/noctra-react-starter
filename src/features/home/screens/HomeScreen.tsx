import { useState } from "react";
import reactLogo from "@/shared/assets/images/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/shared/components/ui";
import { ENV } from "@/config/environment";

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6  transition-all">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-primary-500">
        Vite + React + Tailwind
      </h1>

      <div className="card bg-primary-50 p-6 rounded-2xl shadow-md">
        <Button size="lg" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </Button>
        <p className="mt-3 text-sm text-gray-700">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-sm opacity-70">
        Running in <strong>{ENV?.APP_ENV}</strong> mode
      </p>
    </div>
  );
}
