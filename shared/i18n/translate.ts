type NestedRecord = Record<string, unknown>;

function getByPath(obj: NestedRecord, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as NestedRecord)[part];
  }
  return current;
}

export function createTranslator(messages: NestedRecord) {
  return function t(key: string): string {
    const value = getByPath(messages, key);
    if (typeof value === "string") return value;
    return key;
  };
}
