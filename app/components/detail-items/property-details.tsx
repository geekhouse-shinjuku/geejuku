export default function PropertyDetail() {
  return (
    <div class="flex flex-wrap pt-12 pb-6">
      <div class="md:w-1/5 pr-4 pl-4 pb-3">
        <h3 class="text-xl text-zinc-700">物件内容</h3>
      </div>
      <div class="md:w-3/4 flex flex-wrap pr-4 pl-4">
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            間取り：
            <strong>5LDK</strong>
          </div>
          <div class="pr-4 pl-4">
            住民用個室：
            <strong>なし</strong>
          </div>
          <div class="pr-4 pl-4">
            共用：
            <strong>リビング、テレビ部屋</strong>
          </div>
          <div class="pr-4 pl-4">
            風呂、シャワー：
            <strong>各１</strong>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            住民用ドミトリー：
            <strong>２部屋</strong>
          </div>
          <div class="pr-4 pl-4">
            ゲスト用ドミトリー：
            <strong>１部屋</strong>
          </div>
          <div class="pr-4 pl-4">
            もくもく部屋：
            <strong>１部屋</strong>
          </div>
          <div class="pr-4 pl-4">
            トイレ：
            <strong>２</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
