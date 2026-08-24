import { modules } from '../data/modules'

const responseDelay = 180

export async function fetchModuleRows(moduleKey) {
  const module = modules.find((item) => item.key === moduleKey)

  if (!module) {
    throw new Error('未找到对应的后台业务模块。')
  }

  await new Promise((resolve) => window.setTimeout(resolve, responseDelay))

  return module.rows.map((row) => ({ ...row }))
}
