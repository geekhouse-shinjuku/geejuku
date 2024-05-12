export default function Pricing() {
  return (
    <div class="flex flex-wrap pt-8 pb-6">
      <div class="md:w-1/5 pr-4 pl-4 pb-3">
        <h3 class="text-xl text-zinc-700">料金</h3>
      </div>
      <div class="md:w-3/4 flex flex-wrap pr-4 pl-4">
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            ドミトリー家賃 :<strong>60,000円</strong>
          </div>
          <div class="pr-4 pl-4">
            デポジット：
            <strong>60,000円</strong>
          </div>
          {/* <div class="pr-4 pl-4">
            割引：
            <strong
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              ギーク割引5,000円
            </strong>
          </div> */}
        </div>
        <div class="md:w-1/2">
          <div class="pr-4 pl-4">
            共益費：
            <strong>10,000円</strong>
          </div>
          <div class="pr-4 pl-4">
            退去時クリーニング代：
            <strong>5,000円</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
