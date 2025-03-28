<script lang="tsx" setup>
import type { SpecialLanguage } from "shiki/core";
import type { VNode } from "vue";
import { useCe } from "@/composables/useCe";
import { convertHastToVNodes } from "@/utils/hastToVNode";
import MaterialSymbolsContentCopyRounded from "~icons/material-symbols/content-copy-rounded?width=1rem&height=1rem";
import MaterialSymbolsDoneRounded from "~icons/material-symbols/done-rounded?width=1rem&height=1rem";
import { type BundledLanguage, codeToHast } from "shiki";
import { h, ref, watch } from "vue";

export type Props = {
  lang?: BundledLanguage | SpecialLanguage;
  code: string;
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  lang: "plaintext",
});
// const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props,
} = useCe(hostRef, definedProps, () => {});

const isCopied = ref(false);

const node = ref<VNode[]>(
  [h("pre", { class: "shiki" }, [
    h("code", props.value.code),
  ])],
);

const setCode = async () => {
  const hasted = await codeToHast(props.value.code, {
    lang: props.value.lang,
    themes: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    defaultColor: false,
    transformers: [
      {
        pre(node) {
          node.properties.part = "pre";
          return node;
        },
        span(node) {
          node.properties.part = "pre";
          return node;
        },
      },
    ],
  });

  node.value = convertHastToVNodes(hasted);
};

(async () => {
  setCode();
})();

watch(() => props.value.code, async () => {
  setCode();
});

const handleCLick = () => {
  navigator.clipboard.writeText(props.value.code).then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 1000);
  });
};

defineRender(() => (
  <div ref={hostRef} class="n-code-block">
    <div class="header">
      <span class="lang">{props.value.lang}</span>
    </div>
    <div class="block">
      <button class="button"onClick={handleCLick}>
        copy
        {isCopied.value ? <MaterialSymbolsDoneRounded /> : <MaterialSymbolsContentCopyRounded />}
      </button>
      {node.value?.map(vnode => vnode)}
    </div>
  </div>
));
</script>

<style lang="scss">
.n-code-block {
  overflow: hidden;
  background-color: var(--cs-background-secondary);
  border: 2px solid var(--cs-border-tertiary);
  border-radius: var(--n-2);

  > .header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: var(--n-1) var(--n-4);

    > .lang {
      font-size: var(--n-3);
      color: var(--cs-text-secondary);
    }
  }

  > .block {
    position: relative;

    > .button {
      position: absolute;
      top: var(--n-2);
      right: var(--n-4);
      display: none;
      display: flex;
      gap: var(--n-2);
      align-items: center;
      padding: var(--n-2);
      font-size: var(--n-3);
      color: var(--cs-text-primary);
      cursor: pointer;
      opacity: 0;
      transition: all 0.1s;

      &:hover {
        color: var(--cs-text-secondary);
      }

      &:active {
        scale: 0.98;
      }
    }

    > .shiki {
      padding: var(--n-4);
      margin: 0;
      overflow-x: auto;

      &:focus {
        outline: none;
      }
    }
  }

  &:hover {
    > .block {
      > .button {
        opacity: 1;
      }
    }
  }
}
</style>
