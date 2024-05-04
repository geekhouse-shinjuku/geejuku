export default function Amenities() {
  return (
    <div class="flex flex-wrap pt-8 pb-6">
      <div class="md:w-1/5 pr-4 pl-4 pb-3">
        <h3 class="text-xl text-zinc-700">アメニティ</h3>
      </div>
      <div class="md:w-3/4 flex flex-wrap pr-4 pl-4">
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            <i class="fa fa-md fa-wifi"></i> ワイヤレスインターネット
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-gamepad"></i> Nintendo Switch
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-pencil"></i> 裁断機
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-pencil"></i> もくもく部屋
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-television"></i> テレビ、プロジェクタ
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-coffee"></i> エスプレッソマシン
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-pencil"></i> ScanSnap1500
          </div>
          <div class="pr-4 pl-4">
            <i class="fa fa-lg fa-car"></i>ガレージ 自転車可
          </div>
        </div>
      </div>
    </div>
  );
}
