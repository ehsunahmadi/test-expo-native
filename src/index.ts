import {
  EventEmitter,
  NativeModulesProxy,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to TestExpoNative.web.ts
// and on native platforms to TestExpoNative.ts
import { ChangeEventPayload } from "./TestExpoNative.types";
import TestExpoNativeModule from "./TestExpoNativeModule";

// Get the native constant value.
export const PI = TestExpoNativeModule.PI;

export function hello(): string {
  return TestExpoNativeModule.hello();
}

export async function setValueAsync(value: string) {
  return await TestExpoNativeModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  TestExpoNativeModule ?? NativeModulesProxy.TestExpoNative
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ChangeEventPayload };
