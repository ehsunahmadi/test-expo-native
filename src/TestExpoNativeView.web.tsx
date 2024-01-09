import * as React from 'react';

import { TestExpoNativeViewProps } from './TestExpoNative.types';

export default function TestExpoNativeView(props: TestExpoNativeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
