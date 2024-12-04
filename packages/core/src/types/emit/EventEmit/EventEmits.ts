export type EventEmitHelper<K extends string> = (e: `on${Capitalize<K>}`, eventInitDict: CustomEventInit, event: Event) => void;
