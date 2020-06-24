import { readFileSync, writeFileSync } from 'fs';
import { JsonSpecBuilder } from './JsonSpecBuilder';
import { HalvaSpecModifier } from './HalvaSpecModifier';
import { balanceMiddleware } from './middlewares/BalanceMiddleware';
import { grandpaMiddleware } from './middlewares/GrandpaMiddleware';
import { auraMiddleware } from './middlewares/auraMiddleware';

export * from './SpecBuilder';
export * from './HalvaSpecModifier';

export const loadFromJSON = (json: string): JsonSpecBuilder => {
  return new JsonSpecBuilder(json);
};

export const loadFromFile = (path: string): JsonSpecBuilder => {
  return new JsonSpecBuilder(readFileSync(path, 'utf8'));
};

export const loadFromEncodingFile = (path: string, encoding: BufferEncoding): JsonSpecBuilder => {
  return new JsonSpecBuilder(readFileSync(path, encoding));
};

export const writeToFile = (path: string, data: string): void => {
  writeFileSync(path, data, 'utf8');
};

export const writeTonEcodingFile = (path: string, data: string, encoding: BufferEncoding): void => {
  writeFileSync(path, data, encoding);
};
