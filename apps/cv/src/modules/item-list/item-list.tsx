import { ReactNode } from 'react';

type Props = {
  listItems: ReadonlyArray<{
    id: string;
    date: string;
    detail: {
      title: string;
      subtitle: string;
      useNewLine?: boolean;
    };
  }>;
};

export default function ItemList({ listItems }: Props) {
  return (
    <ul className="ItemList">
      {listItems.map(({ date, detail: { title, subtitle, useNewLine = true }, id }) => (
        <li key={id}>
          <span className="ItemList_Date">{date}</span>
          <span className="ItemList_Detail">
            <span className="u-text-bold">{title}</span>
            {useNewLine && <br />}
            {subtitle}
          </span>
        </li>
      ))}
    </ul>
  );
}
