import { Spinner } from '@tbergq/components';

import { classNames } from './FavoritesLoader.css';

const FavoritesLoader = (): JSX.Element => (
  <div className={classNames.loader}>
    <Spinner dataTest="tableLoader" />
  </div>
);

export default FavoritesLoader;
