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
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Keypad } from './Keypad';

storiesOf('Components/NumericKeypad/Keypad', module)
  .addParameters({ component: Keypad })
  .addDecorator(hostDecorator())
  .add('Confirm integer', () => (
    <Keypad
      onNumberSelect={action('onNumberSelect')}
      onMinusSelect={action('onMinusSelect')}
      onDeleteSelect={action('onDeleteSelect')}
    />
  ))
  .add('Confirm decimal', () => (
    <Keypad
      onNumberSelect={action('onNumberSelect')}
      onMinusSelect={action('onMinusSelect')}
      onDeleteSelect={action('onDeleteSelect')}
      onDecimalSelect={action('onDecimalSelect')}
    />
  ))
  .add('Confirm minus', () => (
    <Keypad
      onNumberSelect={action('onNumberSelect')}
      onMinusSelect={action('onMinusSelect')}
      onDeleteSelect={action('onDeleteSelect')}
      onDecimalSelect={action('onMinusSelect')}
    />
  ))
  .add('hideNegative', () => (
    <Keypad
      onNumberSelect={action('onNumberSelect')}
      onMinusSelect={action('onMinusSelect')}
      onDeleteSelect={action('onDeleteSelect')}
      hideNegative
    />
  ));
