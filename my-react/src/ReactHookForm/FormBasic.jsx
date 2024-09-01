import { useForm } from "react-hook-form";

export default function FormBasic() {
  const defaultValues = {
    name: "山田太郎",
    email: "admin@example.com",
    gender: "male",
    memo: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onerror)} noValidate>
      <div>
        <div>
          <label htmlFor="name">名前：</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "名前は必須です",
              maxLength: {
                value: 20,
                message: "名前は20文字以内で入力してください",
              },
            })}
          />
          <div>{errors.name?.message}</div>
        </div>
        <label htmlFor="gender">性別：</label>
        <br />
        <label>
          <input
            type="radio"
            value="male"
            {...register("gender", { required: "性別は必須です" })}
          />
          男性
        </label>
        <label>
          <input
            type="radio"
            value="female"
            {...register("gender", { required: "性別は必須です" })}
          />
          女性
        </label>
        <div>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "メールアドレスの形式が正しくありません",
            },
          })}
        />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">メモ：</label>
        <br />
        <textarea
          id="memo"
          {...register("memo", {
            required: "メモは必須です",
            minLength: {
              value: 10,
              message: "メモは10文字以上で入力してください",
            },
            validate: (value, formValues) => {
              const ngs = ["FUCK", "fucking", "shit"];

              for (const ng of ngs) {
                if (value.includes(ng)) {
                  return "NG words included.";
                }
              }
              return true;
            },
          })}
        />
        <div>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
