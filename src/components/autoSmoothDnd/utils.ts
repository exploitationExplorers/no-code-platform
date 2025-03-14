import type { CreateComponentPublicInstanceWithMixins, Ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { SmoothDndContainer } from './smoothContainer'

export function validateTagProp(tag?: Ref) {
  if (tag) {
    if (typeof tag === 'string') return true
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true
      }
    }
    return false
  }
  return true
}
type TagConfig = string | { value?: string; props?: Record<string, unknown> }

export interface tagResult {
  value?: string | object
  props?: object
}

// ComponentPublicInstance<{ tag?: TagConfig }>, tagClass?: string、
// InstanceType<typeof SmoothDndContainer>
export function getTagProps(ctx: any, tagClass?: string) {
  console.log('🚀 ~ getTagProps ~ ctx:', ctx)

  const tag = ctx.$props.tag
  if (tag) {
    if (typeof tag === 'string') {
      const result: tagResult = { value: tag }
      if (tagClass) {
        result.props = { class: tagClass }
      }
      return result
    } else if (typeof tag === 'object') {
      const result = { value: tag.value || 'div', props: tag.props || {} }
      if (tagClass) {
        if (result.props.class) {
          if (Array.isArray(result.props.class)) {
            result.props.class.push(tagClass)
          } else {
            result.props.class = [tagClass, result.props.class]
          }
        } else {
          result.props.class = tagClass
        }
      }
      return result
    }
  }
  return { value: 'div' }
}
