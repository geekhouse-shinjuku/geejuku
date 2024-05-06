export default function Footer() {
  return (
    <footer class="py-12 bg-dark text-white">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center py-6">
          <div class="md:w-1/3">
            <h3 class="text-xl font-meidum py-3">ギークハウスプロジェクト</h3>
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
          <div>
            <h3 class="text-xl font-meidum py-3">ときさば系物件(都内)</h3>
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
        <hr class="py-6" />
        <div>
          <h3 class="text-xl text-center py-2">連絡先</h3>
          <ul class="list-unstyled list-inline text-center flex justify-center">
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
        <div class="py-5 text-center text-zinc-500">
          &copy; ぎーじゅく@渋谷・新宿のシェアハウス
        </div>
      </div>
    </footer>
  );
}
