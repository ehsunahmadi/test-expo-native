import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TestExpoNative.web.ts
// and on native platforms to TestExpoNative.ts
import TestExpoNativeModule from './TestExpoNativeModule';
import TestExpoNativeView from './TestExpoNativeView';
import { ChangeEventPayload, TestExpoNativeViewProps } from './TestExpoNative.types';

// Get the native constant value.
export const PI = TestExpoNativeModule.PI;

export function hello(): string {
  return TestExpoNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await TestExpoNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(TestExpoNativeModule ?? NativeModulesProxy.TestExpoNative);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TestExpoNativeView, TestExpoNativeViewProps, ChangeEventPayload };
