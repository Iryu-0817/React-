import React from "react";

export default function ForList({ src }) {
  return (
    <dl>
      {/* コールバック関数の引数名は仮の名前なので、名前はなんでもいい */}
      {src.map((elem) => (
        <>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      ))}
    </dl>
  );
}
