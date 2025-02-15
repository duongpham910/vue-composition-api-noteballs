import { watch, type Ref } from 'vue'

export function useWatchCharacters(valueToWatch: Ref<string>, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${ maxChars } characters allowed gosh darnit!`)
    }
  })
}
