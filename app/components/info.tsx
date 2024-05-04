import { Style, css } from "hono/css";
import SnsButtons from "./contact-buttons";
export default function Info() {
  return (
    <section class="geekhouse">
      <Style>{css`
        .geekhouse {
          padding: 1em 0;

          .row {
            padding: 16px 0;
          }

          h2 {
            margin-top: 0px;
          }
        }
      `}</Style>
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-lg-offset-1 text-center">
            <img
              src="/static/assets/geejuku-logo.jpg"
              alt="ぎーじゅくロゴ"
              class="img-circle"
              width="115"
              hegiht="115"
            />
            <div class="text-muted">ぎーじゅく</div>
          </div>
          <div class="col-lg-6">
            <h2 class="h3">ぎーじゅく（ギークハウス新宿）</h2>
            <p>東京都渋谷区代々木, 日本 </p>
            <div class="row">
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-home"></i>
                <div class="text-muted">一軒家タイプ</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-share-alt"></i>
                <div class="text-muted">ドミトリー</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-users"></i>
                <div class="text-muted">住民 5人</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-bed"></i>
                <div class="text-muted">ゲスト 4</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <SnsButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
