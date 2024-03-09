import { Style, css } from "hono/css";

export default function Detail() {
  return (
    <section class="bg-gray bordered geekhouse" id="about">
      <Style>
        {css`
          .bg-gray {
            background-color: #f5f5f5;
          }
          .bordered {
            border-top: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
          }
        `}
      </Style>
      <div class="container">
        <div class="col-lg-8 col-lg-offset-1">
          <div class="row">
            <h2 class="h3 text-muted">ギークハウス新宿について</h2>
            <p>
              広いリビングと好立地を活かしてイベントが多いです。勉強会、もくもく会、食べ物イベントなど。交流が好きな人にオススメ
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <h3 class="h4 text-muted">物件内容</h3>
            </div>
            <div class="col-lg-9">
              <div class="col-xs-6">
                間取り：
                <strong>5LDK</strong>
              </div>
              <div class="col-xs-6">
                住民用ドミトリー：
                <strong>２部屋</strong>
              </div>
              <div class="col-xs-6">
                住民用個室：
                <strong>なし</strong>
              </div>
              <div class="col-xs-6">
                ゲスト用ドミトリー：
                <strong>１部屋</strong>
              </div>
              <div class="col-xs-6">
                共用：
                <strong>リビング、テレビ部屋</strong>
              </div>
              <div class="col-xs-6">
                もくもく部屋：
                <strong>１部屋</strong>
              </div>
              <div class="col-xs-6">
                風呂、シャワー：
                <strong>各１</strong>
              </div>
              <div class="col-xs-6">
                トイレ：
                <strong>２</strong>
              </div>
            </div>
          </div>
          <div class="row">
            <hr />
            <div class="col-lg-3">
              <h3 class="h4 text-muted">アメニティ・設備</h3>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-wifi"></i> ワイヤレスインターネット
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-television"></i> テレビ、プロジェクタ
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-gamepad"></i> Nintendo Switch
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-coffee"></i> エスプレッソマシン
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-pencil"></i> 裁断機
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-pencil"></i> ScanSnap1500
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-pencil"></i> もくもく部屋
                </div>
                <div class="col-xs-6">
                  <i class="fa fa-lg fa-car"></i>ガレージ 自転車可
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <hr />
            <div class="col-lg-3">
              <h3 class="h4 text-muted">料金</h3>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-xs-6">
                  ドミトリー家賃 :<strong>55,000円</strong>
                </div>
                <div class="col-xs-6">
                  共益費：
                  <strong>10,000円</strong>
                </div>
                <div class="col-xs-6">
                  デポジット：
                  <strong>55,000円</strong>
                </div>
                <div class="col-xs-6">
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
            </div>
          </div>
          <div class="row">
            <hr />
            <div class="col-lg-3">
              <h3 class="h4 text-muted">必須要件</h3>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-xs-6">DQNでない</div>
                <div class="col-xs-6">家賃を滞納せず払える</div>
                <div class="col-xs-6">基本的なマナーが守れる</div>
                <div class="col-xs-6">運営に協力できる</div>
                <div class="col-xs-6">Facebook/Twitter/Gmailが使える</div>
                <div class="col-xs-6">悪臭を予防できる</div>
                <div class="col-xs-6">
                  身分が証明できるものを提出できる
                  <br /> (住民票、免許、パスポート、保険証など)
                </div>
                <div class="col-xs-6">大騒ぎしない</div>
              </div>
            </div>
          </div>
          <div class="row">
            <hr />
            <div class="col-lg-3">
              <h3 class="h4 text-muted">推奨要件</h3>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-xs-6">たばこを吸わない</div>
                <div class="col-xs-6">インターネットが好き</div>
                <div class="col-xs-6">IT関係の仕事、学校、趣味</div>
                <div class="col-xs-6">プログラム言語がひとつ以上使える</div>
                <div class="col-xs-6">荷物が少ない</div>
                <div class="col-xs-6">きれい好き</div>
                <div class="col-xs-6">料理好き</div>
                <div class="col-xs-6">ギークっぽい何かの能力がある</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
