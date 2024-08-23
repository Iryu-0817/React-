export default function EventBasic({ type }) {
  const d = new Date();
  const current = () => {
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocalString());
        break;
    }
  };
  return (
    <div>
      <button onClick={current}> 現在時刻を取得</button>
    </div>
  );
}
