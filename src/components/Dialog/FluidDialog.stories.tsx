/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FluidDialog } from './FluidDialog';
import { range, hostDecorator } from '../../utils';

const longContent = range(0, 15).reduce(
  acc =>
    acc +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat tempus finibus. Donec non mi ante.',
  ''
);

storiesOf('Components/Dialog/FluidDialog', module)
  .addParameters({ component: FluidDialog })
  .addDecorator(
    hostDecorator({
      height: 800,
      width: 800
    })
  )
  .add('Base', () => <FluidDialog onClose={action('onClose')} content={'content'} />)
  .add('Long content', () => <FluidDialog onClose={action('onClose')} content={longContent} />)
  .add('Long content with header and footer', () => (
    <FluidDialog
      onClose={action('onClose')}
      content={longContent}
      header="header"
      footer="footer"
    />
  ));
