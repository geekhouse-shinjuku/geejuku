import { Style, css } from "hono/css";

export default function Header() {
  return (
    <header id="shinjuku">
      <Style>{css`
        header {
          margin-top: 50px;
          position: relative;
          width: 100%;
          min-height: auto;
          text-align: center;
          color: #fff;
          background-position: center;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          background-size: cover;
          -o-background-size: cover;
          min-height: 300px;
        }

        @media (min-width: 768px) {
          header {
            min-height: 690px;
          }
        }

        #shinjuku {
          background-image: url(/static/assets/header-geejuku.jpg);
        }
      `}</Style>
      <div class="header-content">
        <div class="header-content-inner">
          <h1 class="hide">ギークハウス新宿</h1>
        </div>
      </div>
      <script></script>
    </header>
  );
}
