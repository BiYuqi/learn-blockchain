export function getStore(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log(`localStorage -- 读取${key}失败`)
    return null
  }
}

export function setStore(key, value) {
  try {
    return localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(`localStorage -- 设置${key}失败`)
    return null
  }
}

export function removeStore(key) {
  try {
    return localStorage.removeItem(key)
  } catch (e) {
    console.log(`localStorage -- 移除${key}失败`)
    return null
  }
}

export function clearStore() {
  localStorage.clear()
}
