import { useState } from "react";

const StateForm = () => {
  const [form, setForm] = useState({
    name: "山田太郎",
    age: 25,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const show = () => {
    console.log(`こんにちは、${form.name} (${form.age}歳) さん！`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input
          id="age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
};

export default StateForm;
