import nodes from '../../api/normal_nodes'

export function getAllGraph() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(nodes)
    }, 500)
  })
}
