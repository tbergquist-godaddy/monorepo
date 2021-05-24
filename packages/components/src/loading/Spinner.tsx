import { classNames } from './Spinner.css';

type Size = 'page' | 'normal' | 'small';

type Props = Readonly<{
  size?: Size;
  dataTest?: string;
}>;

export default function Spinner({ size = 'page', dataTest }: Props) {
  return (
    <div data-test={dataTest} className={classNames.container[size]}>
      <div className={classNames.element[size]} />
      <div className={classNames.element[size]} />
      <div className={classNames.element[size]} />
      <div className={classNames.element[size]} />
    </div>
  );
}
