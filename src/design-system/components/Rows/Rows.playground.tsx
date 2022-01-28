/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Playground } from '../../docs/types';
import * as examples from './Rows.examples';

import meta from './Rows.meta';

const playground: Playground = {
  meta,
  examples: [
    examples.basicUsage,
    examples.customSpace,
    examples.customHeights,
    examples.rowWithContentHeight,
    examples.nestedRows,
    examples.nestedRowsWithExplicitHeights,
    examples.nestedRowsWithExplicitHeightsContent,
  ],
};

export default playground;
