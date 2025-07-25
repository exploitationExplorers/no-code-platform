<template>
  <smooth-dnd-container
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <smooth-dnd-draggable v-for="(block, i) in blocks" :key="block.id">
      <div class="block-wrapper" @click.stop="selectBlock(block.id)">
        <!-- @vue-ignore -->
        <component
          :is="$blocksMap[block.type].material"
          class="block"
          :content="block.props?.content"
        />
        <div
          :class="[
            'block-wrapper-indicator',
            { shown: envStore.debug, selected: currentBlockId === block.id }
          ]"
        >
          <div class="block-toolbar" v-if="currentBlockId === block.id">
            <div class="block-toolbar-item handle">
              <drag />
            </div>
            <div class="block-toolbar-item" @click="blocks.splice(i, 1)">
              <delete />
            </div>
          </div>
        </div>
      </div>
    </smooth-dnd-draggable>
  </smooth-dnd-container>
</template>

<script setup lang="ts">
import { Delete, Drag } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { dropHandlers, type DropResult, smoothDnD } from 'smooth-dnd'
import { toRaw } from 'vue'

import { SmoothDndContainer } from '@/components/autoSmoothDnd/smoothContainer'
import { SmoothDndDraggable } from '@/components/autoSmoothDnd/smoothDndDraggable'
import { useAppEditorStore } from '@/stores/appEditor'
import { useEnvStore } from '@/stores/debug'
import { arrayMove } from '@/utils/arr'

interface Block {
  id: string
  type: string
  props?: {
    content?: Record<string, unknown>
  }
}

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

// const props = defineProps<{
//   type: BlockType
// }>()

const envStore = useEnvStore()
const appEditorStore = useAppEditorStore()

const { currentBlockId, blocks } = storeToRefs(appEditorStore)
const { selectBlock, updateBlocks } = appEditorStore

const applyDrag = <T extends Block[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult

  const result = [...arr]

  // 没做操作
  if (addedIndex === null) return result

  // 添加
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, {
      id: `${Math.random()}`,
      ...payload
    })
  }

  // 移动
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }

  return result
}

// 需要保证 blocksMap 在 BlockRenderer 之前被注入，并且我们暂时使用的 Symbol 作为 key
// console.log(inject('blocksMap'))
</script>

<style scoped lang="scss">
.block-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 6px 4px;
  border-radius: 8px;
  background-color: var(--color-white);
  transition: box-shadow 0.2s ease-in-out;

  &.debug:hover .block-wrapper-senior {
    border-style: solid;
    transition: box-shadow 0.2s ease-in-out;
  }
}

.block {
  position: relative;
  z-index: 1;
}

.block-wrapper-indicator {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 8px;
  pointer-events: none;
  user-select: none;

  &.shown {
    border: 1px dashed var(--color-gray-300);
  }

  &.selected {
    border: 1px solid var(--color-primary);
  }
}

.block-toolbar {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: -36px;
  z-index: 1;
  padding: 4px 8px;
  gap: 4px;
  background-color: var(--color-black);
  border-radius: 6px;
  pointer-events: visible;
}

.block-toolbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;

  &:nth-of-type(1) {
    cursor: grab;
  }

  &:hover {
    background-color: var(--color-gray-800);
    transition: all 0.2s ease-in-out;
  }
}
</style>

<style lang="scss">
.smooth-dnd-draggable-wrapper {
  overflow: visible !important;
}
</style>
