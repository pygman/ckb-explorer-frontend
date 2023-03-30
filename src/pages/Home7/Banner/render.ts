export interface BannerRender {
  onResize: () => void
  destroy: () => void
}

export function createBannerRender(container: HTMLElement) {
  // eslint-disable-next-line no-console
  console.log(container)

  return {
    onResize() {},
    destroy() {},
  }
}
