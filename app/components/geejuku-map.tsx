import { Style, css } from "hono/css";

export default function GeejukuMap() {
  return (
    <section class="map">
      <Style>{css`
        .map {
          padding: 60px 0;
        }
        .map iframe {
          width: 100%;
          max-width: 600px;
        }
      `}</Style>
      <div id="map"></div>
      <div class="map-card">
        <div class="text-xl font-medium text-center py-2">
          ぎーじゅく（ギークハウス新宿）
        </div>
        <div class="text-center text-muted">
          JR新宿駅 南口から徒歩7分
          <br /> JR、大江戸線代々木駅から歩いて8分
          <br /> 小田急線南新宿駅から4分
          <br /> 都営新宿線から歩いて5分
        </div>
      </div>
      <br />
      <div class="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6917887939085!2d139.69454447578784!3d35.68459037258628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cce6ced4c41%3A0x722cc5507d33cce!2z44Ku44O844Kv44OP44Km44K55paw5a6_!5e0!3m2!1sja!2sjp!4v1709967325008!5m2!1sja!2sjp"
          height="450"
          style="border:0;"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
