export default function HeaderSp() {
  return (
    <header class="flex items-center min-h-auto px-4 justify-between">
      <div class="flex items-center">
        <img
          src="/static/assets/geejuku-logo.jpg"
          alt="ぎーじゅくロゴ"
          class="block w-12 h-12"
        />
        <div class="text-center px-3">
          <div class="text-zinc-500 text-base">ぎーじゅく</div>
          <div class="text-zinc-500 text-base">（ギークハウス新宿）</div>
        </div>
      </div>
      <div class="w-fit">
        <a href="mailto:geejuku@kemari.tokyo" target="_blank">
          <button
            type="button"
            class="align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-6 leading-normal no-underline block w-full bg-green-600 text-white hover:green-700"
          >
            お問い合わせ
          </button>
        </a>
      </div>
    </header>
  );
}
