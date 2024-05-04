import SnsButtons from "./contact-buttons";

export const SideBar = () => {
  return (
    <div class="flex justify-center flex-col py-12">
      <div class="text-center">
        <img
          src="/static/assets/geejuku-logo.jpg"
          alt="ぎーじゅくロゴ"
          class="m-auto block w-36 h-36"
        />
        <div class="pt-1 text-lg font-bold">ぎーじゅく</div>
        <div class="text-lg font-bold">（ギークハウス新宿）</div>
      </div>

      <SnsButtons />

      <div class="flex flex-col">
        <hr />
        <h3 class="h4 text-muted">物件内容</h3>
        <div>
          間取り： <strong>5LDK</strong>
        </div>
        <div>
          住民用ドミトリー：
          <strong>２部屋</strong>
        </div>
        <div>
          住民用個室：
          <strong>なし</strong>
        </div>
        <div>
          ゲスト用ドミトリー：
          <strong>１部屋</strong>
        </div>
        <div>
          共用：
          <strong>リビング、テレビ部屋</strong>
        </div>
        <div>
          もくもく部屋：
          <strong>１部屋</strong>
        </div>
        <div>
          風呂、シャワー：
          <strong>各１</strong>
        </div>
        <div>
          トイレ：
          <strong>２</strong>
        </div>
      </div>

      <div class="flex flex-col pt-4">
        <hr />
        <h3 class="h4 text-muted">アメニティ・設備</h3>
        <div>
          <i class="fa fa-lg fa-wifi"></i> ワイヤレスインターネット
        </div>
        <div>
          <i class="fa fa-lg fa-television"></i> テレビ、プロジェクタ
        </div>
        <div>
          <i class="fa fa-lg fa-gamepad"></i> Nintendo Switch
        </div>
        <div>
          <i class="fa fa-lg fa-coffee"></i> エスプレッソマシン
        </div>
        <div>
          <i class="fa fa-lg fa-pencil"></i> 裁断機
        </div>
        <div>
          <i class="fa fa-lg fa-pencil"></i> ScanSnap1500
        </div>
        <div>
          <i class="fa fa-lg fa-pencil"></i> もくもく部屋
        </div>
        <div>
          <i class="fa fa-lg fa-car"></i>ガレージ 自転車可
        </div>
      </div>

      <div class="flex flex-col pt-4">
        <hr />
        <h3 class="h4 text-muted">料金</h3>
        <div>
          ドミトリー家賃 :<strong>60,000円</strong>
        </div>
        <div>
          共益費：
          <strong>10,000円</strong>
        </div>
        <div>
          デポジット：
          <strong>60,000円</strong>
        </div>
        <div>
          退去時クリーニング代：
          <strong>5,000円</strong>
        </div>
        <div>
          割引：
          <strong
            data-toggle="tooltip"
            data-placement="bottom"
            title="Tooltip on bottom"
          >
            ギーク割引5,000円
          </strong>
        </div>
      </div>
      <div class="flex flex-col pt-4">
        <hr />
        <h3 class="h4 text-muted">必須要件</h3>
        <div>DQNでない</div>
        <div>家賃を滞納せず払える</div>
        <div>基本的なマナーが守れる</div>
        <div>運営に協力できる</div>
        <div>Facebook/Twitter/Gmailが使える</div>
        <div>悪臭を予防できる</div>
        <div>
          身分が証明できるものを提出できる
          <br /> (住民票、免許、パスポート、保険証など)
        </div>
        <div>大騒ぎしない</div>
      </div>
      <div class="flex flex-col pt-4">
        <hr />
        <h3 class="h4 text-muted">推奨要件</h3>
        <div>たばこを吸わない</div>
        <div>インターネットが好き</div>
        <div>IT関係の仕事、学校、趣味</div>
        <div>プログラム言語がひとつ以上使える</div>
        <div>荷物が少ない</div>
        <div>きれい好き</div>
        <div>料理好き</div>
        <div>ギークっぽい何かの能力がある</div>
      </div>
    </div>
  );
};
