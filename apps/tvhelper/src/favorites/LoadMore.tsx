import { Button } from '@tbergq/components';

type Props = Readonly<{
  isLoading: boolean;
  onClick: () => void;
  text?: string;
}>;

const LoadMore = ({ isLoading, onClick, text = 'Load more' }: Props): JSX.Element => {
  return (
    <Button loading={isLoading} onClick={onClick} color="secondary">
      {text}
    </Button>
  );
};

LoadMore.displayName = 'LoadMore';
export default LoadMore;
