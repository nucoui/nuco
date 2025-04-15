<script lang="tsx" setup>
import NDividerCe from "@/components/common/NDivider/NDivider.ce.vue";
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});
// const emit = defineEmits<EventEmitHelper<Emits>>();
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props: _props,
} = useCe(definedProps, () => {});

defineRender(() => (
  <>
    <NDividerCe />
    <nav class="n-pagers">
      <span class="prev">
        <slot name="prev" />
      </span>
      <span class="next">
        <slot name="next" />
      </span>
    </nav>
  </>
));
</script>

<style lang="scss">
.n-pagers {
  display: grid;
  grid-template-areas: "PREV NEXT";
  grid-template-columns: 1fr 1fr;
  gap: var(--n-4);
  padding-top: var(--n-4);

  > .prev {
    grid-area: PREV;
  }

  > .next {
    grid-area: NEXT;
  }
}
</style>
