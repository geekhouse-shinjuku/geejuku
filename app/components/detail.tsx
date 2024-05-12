import Amenities from "./detail-items/amenities";
import Pricing from "./detail-items/pricing";
import PropertyDetail from "./detail-items/property-details";
import RecommendedRequirements from "./detail-items/recommended-requirements";
import RequiredRequirements from "./detail-items/required-requirements";

export default function Detail() {
  return (
    <section class="bg-zinc-50 border-t border-b border-zinc-300 py-8">
      <div class="container mx-auto md:px-16">
        <div class="pr-4 pl-4 col-lg-offset-1">
          <div class="px-4">
            <h2 class="text-3xl text-zinc-500">ギークハウス新宿について</h2>
            <p class="text-zinc-900 py-2 text-base">
              広いリビングと好立地を活かしてイベントが多いです。勉強会、もくもく会、食べ物イベントなど。交流が好きな人におすすめです！
            </p>
            <p class="mt-5">
              <span><b>公式サイト：</b></span>
              <span>
                <a href="https://geejuku.tokyo" target="_blank" class="text-blue-500 hover:text-blue-700">
                  ぎーじゅく@渋谷・新宿のシェアハウス
                </a>
              </span>
            </p>
          </div>
          <div class="px-4">
            <PropertyDetail />
            <hr />
            <Amenities />
            <hr />
            <Pricing />
            <hr />
            <RequiredRequirements />
            <hr />
            <RecommendedRequirements />
          </div>
        </div>
      </div>
    </section>
  );
}
