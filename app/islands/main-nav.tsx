import { useState } from "hono/jsx";

export default function MainNav() {
  // メニューの表示状態を管理するstate
  const [isOpen, setIsOpen] = useState(false);

  // メニュー表示状態を切り替える関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav class="bg-white text-zinc-500 p-4 fixed w-full z-50 border-b">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-lg text-zinc-500">
          <a href="/">ぎーじゅくブログ</a>
        </div>
        <div class={`hidden md:flex space-x-4`}>
          <a href="/" class="hover:text-zinc-300">
            記事一覧
          </a>
          <a href="/about" class="hover:text-zinc-300">
            このギークハウスについて
          </a>
        </div>
        <button class="md:hidden block hamburger" onClick={toggleMenu}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <div class={`${isOpen ? "block" : "hidden"} md:hidden pt-4`}>
        <a href="/" class="block hover:bg-zinc-700 p-2">
          記事一覧
        </a>
        <a href="/about" class="block hover:bg-zinc-700 p-2">
          このギークハウスについて
        </a>
      </div>
    </nav>
  );
}
