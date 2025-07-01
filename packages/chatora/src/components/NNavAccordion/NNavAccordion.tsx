import { type CC, signal } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean } from "chatora/util";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NNavAccordion.scss?inline";

export type Props = {
  isDefaultOpen?: boolean;
};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

let idCounter = 0;
const generateId = () => `nnavaccordion-${++idCounter}`;

export const NNavAccordion: CC<Props, Emits> = ({ defineProps }) => {
  const props = defineProps({
    isDefaultOpen: (v: string | undefined) => toBoolean(v) ?? false,
  });

  const isOpen = signal(props().isDefaultOpen);
  const id = generateId();
  const buttonId = generateId();

  const handleClick = () => {
    isOpen.set(!isOpen.value);
  };

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <div>
        <h3 class="summary">
          <button
            type="button"
            id={buttonId}
            aria-expanded={isOpen.value}
            aria-controls={id}
            onClick={handleClick}
            class="button"
          >
            <slot name="summary">summary</slot>
            <svg class="arrow" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </h3>
        <div
          id={id}
          aria-labelledby={buttonId}
          role="region"
          class="detail"
          data-hidden={!isOpen.value}
        >
          <div class="inner">
            <div class="stroke" />
            <slot />
          </div>
        </div>
      </div>
    </Host>
  );
};
