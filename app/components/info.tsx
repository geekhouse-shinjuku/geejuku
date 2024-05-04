import SnsButtons from "./contact-buttons";
export default function Info() {
  return (
    <section class="geekhouse">
      <div class="container mx-auto px-4 md:py-10">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/5 pr-4 pl-4 col-lg-offset-1 text-center">
            <img
              src="/static/assets/geejuku-logo.jpg"
              alt="ぎーじゅくロゴ"
              class="m-auto block w-28 h-28"
            />
            <div class="text-zinc-500 text-base">ぎーじゅく</div>
          </div>
          <div class="w-full md:w-1/2 pr-4 pl-4 text-center md:text-left">
            <h2 class="text-2xl py-3">ぎーじゅく（ギークハウス新宿）</h2>
            <p class="text-sm">東京都渋谷区代々木, 日本</p>
            <div class="flex flex-wrap md:flex-nowrap py-4 md:gap-8">
              <div class="pr-4 pl-4 text-center">
                <i class="fa fa-3x fa-home"></i>
                <div class="text-zinc-500">一軒家タイプ</div>
              </div>
              <div class="pr-4 pl-4 text-center">
                <i class="fa fa-3x fa-share-alt"></i>
                <div class="text-zinc-500">ドミトリー</div>
              </div>
              <div class="pr-4 pl-4 text-center">
                <i class="fa fa-3x fa-users"></i>
                <div class="text-zinc-500">住民 5人</div>
              </div>
              <div class="pr-4 pl-4 text-center">
                <i class="fa fa-3x fa-bed"></i>
                <div class="text-zinc-500">ゲスト 4</div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/4 pr-4 pl-4">
            <SnsButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
