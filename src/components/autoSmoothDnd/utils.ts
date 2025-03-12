// import type { Ref } from 'vue'
// import type { ComponentInternalInstance } from 'vue'
// /**

// export function validateTagProp(tag?: Ref) {
//   if (tag) {
//     if (typeof tag === 'string') return true
//     if (typeof tag === 'object') {
//       if (
//         typeof tag.value === 'string' ||
//         typeof tag.value === 'function' ||
//         typeof tag.value === 'object'
//       ) {
//         return true
//       }
//     }
//     return false
//   }
//   return true
// }
// export interface tagResult {
//   value?: string | object
//   props?: object
// }
// export function getTagProps(ctx: ComponentInternalInstance, tagClass?: string) {
//   console.log('🚀 ~ getTagProps ~ ctx:', ctx)
//   const tag = ctx.$props.tag
//   if (tag) {
//     if (typeof tag === 'string') {
//       const result: tagResult = { value: tag }
//       if (tagClass) {
//         result.props = { class: tagClass }
//       }
//       return result
//     } else if (typeof tag === 'object') {
//       const result = { value: tag.value || 'div', props: tag.props || {} }
//       if (tagClass) {
//         if (result.props.class) {
//           if (Array.isArray(result.props.class)) {
//             result.props.class.push(tagClass)
//           } else {
//             result.props.class = [tagClass, result.props.class]
//           }
//         } else {
//           result.props.class = tagClass
//         }
//       }
//       return result
//     }
//   }
//   return { value: 'div' }
// }
