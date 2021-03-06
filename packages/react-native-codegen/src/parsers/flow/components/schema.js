/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {
  EventTypeShape,
  PropTypeShape,
  CommandTypeShape,
  ExtendsPropsShape,
  SchemaType,
  OptionsShape,
} from '../../../CodegenSchema.js';

export type ComponentSchemaBuilderConfig = $ReadOnly<{|
  filename: string,
  componentName: string,
  extendsProps: $ReadOnlyArray<ExtendsPropsShape>,
  events: $ReadOnlyArray<EventTypeShape>,
  props: $ReadOnlyArray<PropTypeShape>,
  commands: $ReadOnlyArray<CommandTypeShape>,
  options?: ?OptionsShape,
|}>;

function wrapComponentSchema({
  filename,
  componentName,
  extendsProps,
  events,
  props,
  options,
  commands,
}: ComponentSchemaBuilderConfig): SchemaType {
  return {
    modules: {
      [filename]: {
        components: {
          [componentName]: {
            ...(options || {}),
            extendsProps,
            events,
            props,
            commands,
          },
        },
      },
    },
  };
}

module.exports = {
  wrapComponentSchema,
};
