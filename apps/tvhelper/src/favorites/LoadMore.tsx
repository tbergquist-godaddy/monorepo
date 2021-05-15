import Box from 'components/Box';
import { Button } from '@tbergq/components';

type Props = Readonly<{
  isLoadingMore: boolean;
  loadMore: () => void;
}>;

const LoadMore = ({ isLoadingMore, loadMore }: Props) => {
  return (
    <Box justifyContent="center" display="flex">
      <Button loading={isLoadingMore} onClick={loadMore} color="secondary">
        Load more
      </Button>
    </Box>
  );
};

LoadMore.displayName = 'LoadMore';
export default LoadMore;
