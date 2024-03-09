export default function Info() {
  return (
    <section class="geekhouse">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-lg-offset-1 text-center">
            <img
              src="/app/assets/profile-uenu.jpg"
              alt="管理人うえぬ"
              class="img-circle"
              width="115"
              hegiht="115"
            />
            <div class="text-muted">うえぬ</div>
          </div>
          <div class="col-lg-6">
            <h2 class="h3">
              ギークハウス新宿
              <small>ときさば系ギークハウスの中心地</small>
            </h2>
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
                <div class="text-muted">住民 8人</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-bed"></i>
                <div class="text-muted">ゲスト 4</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center contact">
            <a href="mailto:geejuku@kemari.tokyo" target="_blank">
              <button type="button" class="btn btn-block btn-success">
                お問い合わせ
              </button>
            </a>
            <a href="https://twitter.com/geejuku" target="_blank">
              <button type="button" class="btn btn-block btn-twitter">
                Twitter
              </button>
            </a>
            <a href="https://www.facebook.com/geejuku/" target="_blank">
              <button type="button" class="btn btn-block btn-facebook">
                Facebook
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
