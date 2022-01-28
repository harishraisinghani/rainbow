/* eslint-disable sort-keys-fix/sort-keys-fix */
import React from 'react';

import { Example } from '../../docs/types';
import source from '../../docs/utils/source.macro';
import { Placeholder } from '../../playground/Placeholder';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Row, Rows } from './Rows';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const basicUsage: Example = {
  name: 'Basic usage',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space="19px">
          <Placeholder height="100%" />
          <Placeholder height="100%" />
          <Placeholder height="100%" />
        </Rows>
      </Box>
    ),
};

export const customSpace: Example = {
  name: 'Custom space',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space={{ custom: 10 }}>
          <Placeholder height="100%" />
          <Placeholder height="100%" />
          <Placeholder height="100%" />
        </Rows>
      </Box>
    ),
};

export const customHeights: Example = {
  name: 'Custom heights',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space={{ custom: 10 }}>
          <Row height="1/4">
            <Placeholder height="100%" />
          </Row>
          <Row height="3/4">
            <Placeholder height="100%" />
          </Row>
        </Rows>
      </Box>
    ),
};

export const rowWithContentHeight: Example = {
  name: 'Row with content height',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space="12px">
          <Placeholder height="100%" />
          <Row height="content">
            <Placeholder />
          </Row>
        </Rows>
      </Box>
    ),
};

export const nestedRows: Example = {
  name: 'Nested rows',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space="12px">
          <Placeholder height="100%" />
          <Rows space="3px">
            <Placeholder height="100%" />
            <Placeholder height="100%" />
          </Rows>
        </Rows>
      </Box>
    ),
};

export const nestedRowsWithExplicitHeights: Example = {
  name: 'Nested rows with explicit heights',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space="12px">
          <Placeholder height="100%" />
          <Rows space="12px">
            <Row height="1/3">
              <Placeholder height="100%" />
            </Row>
            <Placeholder height="100%" />
          </Rows>
        </Rows>
      </Box>
    ),
};

export const nestedRowsWithExplicitHeightsContent: Example = {
  name: 'Nested rows with explicit heights (content)',
  Example: () =>
    source(
      <Box height={{ custom: 200 }}>
        <Rows space="19px">
          <Placeholder height="100%" />
          <Row height="content">
            <Rows space="6px">
              <Row height="content">
                <Placeholder height={60} />
              </Row>
              <Row height="content">
                <Placeholder height={60} />
              </Row>
            </Rows>
          </Row>
        </Rows>
      </Box>
    ),
};
