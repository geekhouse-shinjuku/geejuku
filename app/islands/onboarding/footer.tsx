import { Style, css } from "hono/css";

export default function Footer() {
  return (
    <footer>
      <Style>{css`
        footer {
          padding: 50px 0;
          background-color: #2b2d2e;
          color: #fff;
        }

        footer .h4 {
          margin-top: 0;
        }
        footer a,
        footer a:hover,
        footer a:visited {
          color: #fff;
        }

        footer a:hover {
          text-decoration: none;
          opacity: 0.5;
        }
      `}</Style>
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-3">
            <h3 class="h4">ギークハウスプロジェクト</h3>
            <ul class="list-unstyled">
              <li>
                <a href="https://geekhouse.tumblr.com/" target="_blank">
                  ギークハウスプロジェクト
                </a>
              </li>
              <li>
                <a
                  href="https://geekhouse.tumblr.com/post/82283493603/"
                  target="_blank"
                >
                  入居者募集
                </a>
              </li>
              <li>
                <a href="https://geekhouse.tumblr.com/unei" target="_blank">
                  運営について
                </a>
              </li>
              <li>
                <a
                  href="https://ja.wikipedia.org/wiki/ギークハウスプロジェクト"
                  target="_blank"
                >
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h3 class="h4">ときさば系物件(都内)</h3>
            <ul class="list-unstyled">
              <li>
                <a
                  href="https://enginemaker.space/engine_maker.html"
                  target="_blank"
                >
                  シェアハウス「EngineMaker」
                </a>
              </li>
              <li>
                <a href="#">ギークハウス新宿</a>
              </li>
              <li>
                <a
                  href="https://enginemaker.space/geekhouse-shinjuku-2chome.html"
                  target="_blank"
                >
                  ギークハウス新宿２丁目
                </a>
              </li>
              <li>
                <a href="https://enginemaker.space/geekhouse-4tsuya.html">
                  ギークハウス新宿四ツ谷
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row">
          <h3 class="h4 text-center">連絡先</h3>
          <ul class="list-unstyled list-inline text-center">
            <li>
              <a href="https://twitter.com/geejuku" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/geejuku/" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="row text-center text-muted">
          &copy; ぎーじゅく@渋谷・新宿のシェアハウス
        </div>
      </div>
    </footer>
  );
}
