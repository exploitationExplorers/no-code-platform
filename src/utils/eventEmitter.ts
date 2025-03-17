const eventName = ['MESSAGE', 'ROUTER'] as const

type EventName = (typeof eventName)[number]
class EventEmitter {
  // 将 Function 类型替换为具体的回调函数类型 () => void
  private events: Record<EventName, Set<(...args) => void>> = {
    MESSAGE: new Set(),
    ROUTER: new Set()
  }

  on(eventName: EventName, callBack: () => void) {
    this.events[eventName].add(callBack)
  }
  emit(eventName: EventName, ...args) {
    this.events[eventName].forEach((callBack) => callBack(...args))
  }
  off(eventName: EventName, callBack: () => void) {
    this.events[eventName].delete(callBack)
  }
}

export default new EventEmitter()
