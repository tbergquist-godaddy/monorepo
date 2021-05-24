import { classNames } from './Loading.css';

type Props = Readonly<{
  dataTest?: string;
}>;

export default function Loading({ dataTest }: Props) {
  return (
    <span className={classNames.wrapper} data-test={dataTest}>
      <span className={classNames.dot} />
      <span className={classNames.dot} />
      <span className={classNames.dot} />
    </span>
  );
}
