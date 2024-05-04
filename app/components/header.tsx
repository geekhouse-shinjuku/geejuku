import { Style, css } from "hono/css";

export default function Header() {
  return (
    <header
      id="shinjuku-header"
      class="relative w-full text-center text-white bg-center bg-cover min-h-[260px] md:min-h-[360px]"
    >
      <Style>{css`
        #shinjuku-header {
          background-image: url(/static/assets/header-geejuku2.png);
        }
      `}</Style>
      <div class="header-content">
        <div class="header-content-inner"></div>
      </div>
    </header>
  );
}
