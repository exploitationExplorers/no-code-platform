import { defineComponent, h } from 'vue'
import type { Ref } from 'vue'
import { smoothDnD, dropHandlers } from 'smooth-dnd'
import type { ContainerOptions, SmoothDnD } from 'smooth-dnd'
import { getTagProps, validateTagProp } from './utils'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
smoothDnD.wrapChild = false

type EventKey = 'drag-start' | 'drag-end' | 'drop' | 'drag-enter' | 'drag-leave' | 'drop-ready'

const eventEmitterMap: Record<EventKey, string> = {
  'drag-start': 'onDragStart',
  'drag-end': 'onDragEnd',
  drop: 'onDrop',
  'drag-enter': 'onDragEnter',
  'drag-leave': 'onDragLeave',
  'drop-ready': 'onDropReady'
}

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  setup() {
    return {
      container: null as SmoothDnD | null
    }
  },
  mounted() {
    // emit events
    const options = Object.assign({}, this.$props)
    console.log(options)

    for (const key in eventEmitterMap) {
      const eventKey = key as EventKey
      options[eventEmitterMap[eventKey]] = (props: Ref) => {
        this.$emit(eventKey, props)
      }
    }
    const containerElement = this.$refs.container || this.$el
    this.container = smoothDnD(containerElement, options as unknown as ContainerOptions)
  },
  unmounted() {
    if (this.container) {
      try {
        this.container.dispose()
      } catch {
        // ignore
      }
    }
  },
  emits: ['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready'],
  props: {
    orientation: { type: String, default: 'vertical' },
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    animationDuration: { type: Number, default: 250 },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,

    dropClass: String,
    dragBeginDelay: Number,
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
      validator: validateTagProp,
      default: 'div'
    }
  },
  render() {
    const tagProps = getTagProps(this)
    console.log(this, 'this')

    return h(
      tagProps.value,
      Object.assign({}, { ref: 'container' }, tagProps.props),
      this.$slots.default?.()
    )
  }
})
