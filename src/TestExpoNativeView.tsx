import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TestExpoNativeViewProps } from './TestExpoNative.types';

const NativeView: React.ComponentType<TestExpoNativeViewProps> =
  requireNativeViewManager('TestExpoNative');

export default function TestExpoNativeView(props: TestExpoNativeViewProps) {
  return <NativeView {...props} />;
}
