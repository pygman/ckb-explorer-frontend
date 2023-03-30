import { Scene } from 'three'

export interface BannerRender {
  onResize: () => void
  destroy: () => void
}

export function createBannerRender(container: HTMLElement) {
  const scene = new Scene()
  // eslint-disable-next-line no-console
  console.log(scene, container)

  return {
    onResize() {},
    destroy() {},
  }
}
