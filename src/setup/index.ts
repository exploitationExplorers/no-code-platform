import type { App } from 'vue'

import ChartBlock from '@/blocks/basic/ChatBlock.vue'
import ImageBlock from '@/blocks/basic/ImageBlock.vue'
import QuoteBlock from '@/blocks/basic/QuoteBlock.vue'
import HeroTitleBlock from '@/blocks/basic/TitleBlock.vue'
import ViewBlock from '@/blocks/basic/ViewBlock.vue'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'
import FormBlock from '@/blocks/external/FormBlock.vue'
import NotesBlock from '@/blocks/external/NoteBook.vue'
import type { BlockType } from '@/types/block'

interface BlockMaterial {
  type: BlockType
  material:
    | typeof QuoteBlock
    | typeof HeroTitleBlock
    | typeof ViewBlock
    | typeof ChartBlock
    | typeof ImageBlock
    | typeof ButtonBlock
    | typeof FormBlock
    | typeof NotesBlock
}

const baseBlocks: BlockMaterial[] = [
  {
    type: 'quote',
    material: QuoteBlock
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock
  },
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'chart',
    material: ChartBlock
  },
  {
    type: 'image',
    material: ImageBlock
  }
]
class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: BlockMaterial) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()

console.log(
  '🚀 ~ file: BlockRenderer.vue:55 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)

blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})
blockSuite.addBlock({
  type: 'form',
  material: FormBlock
})
blockSuite.addBlock({
  type: 'notes',
  material: NotesBlock
})
console.log(
  '🚀 ~ file: BlockRenderer.vue:68 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)
const blocksMap = blockSuite.getBlocksMap()

export const blocksMapSymbol = Symbol('blocksMap')

export const setup = (app: App<Element>) => {
  const ins = {
    install(app: App<Element>) {
      app.provide(blocksMapSymbol, blocksMap)
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }

  app.use(ins)
}
