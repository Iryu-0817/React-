import { useState } from "react";
import "./EventPoint.css";

const EventPoint = () => {
  const [screen, setScreen] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState({ x: 0, y: 0 });
  const [client, setClient] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setScreen({ x: e.screenX, y: e.screenY });
    setPage({ x: e.pageX, y: e.pageY });
    setClient({ x: e.clientX, y: e.clientY });
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div id="main" onMouseMove={handleMove}>
      <p>
        スクリーン座標: {screen.x}, {screen.y}
      </p>
      <p>
        ページ座標: {page.x}, {page.y}
      </p>
      <p>
        クライアント座標: {client.x}, {client.y}
      </p>
      <p>
        オフセット座標: {offset.x}, {offset.y}
      </p>
    </div>
  );
};

export default EventPoint;
