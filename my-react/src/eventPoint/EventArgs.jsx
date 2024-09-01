const EventArgs = () => {
  const current = (e, type) => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
        break;
      case "time":
        console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.target.id}: ${d.toLocaleString()}`);
        break;
    }
  };

  return (
    <div>
      <button id="date" onClick={(e) => current(e, "date")}>
        日付
      </button>
      <button id="time" onClick={(e) => current(e, "time")}>
        時刻
      </button>
      <button id="datetime" onClick={(e) => current(e, "datetime")}>
        日時
      </button>
    </div>
  );
};

export default EventArgs;
