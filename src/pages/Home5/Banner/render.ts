import { OrthographicCamera, Scene, WebGLRenderer, sRGBEncoding } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { createBloomComposerController } from './renderUtils'

export interface BannerRender {
  onResize: () => void
  destroy: () => void
}

export function createBannerRender(container: HTMLElement) {
  const width = container.clientWidth
  const height = container.clientHeight
  const aspect = width / height
  const scene = new Scene()
  // The following number constants are from the design draft.
  const camera = new OrthographicCamera(-700 * aspect, 700 * aspect, 150 * aspect, -150 * aspect, -100000, 100000)
  const renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputEncoding = sRGBEncoding
  renderer.setSize(width, height)
  container.appendChild(renderer.domElement)

  // Fixed a viewing angle.
  camera.rotation.x = Math.PI / (180 / -37.46)
  camera.rotation.y = Math.PI / (180 / -33.83)
  camera.rotation.z = Math.PI / (180 / -28)
  camera.position.x = -540
  camera.position.z = 880
  camera.position.y = 720
  camera.updateWorldMatrix(true, false)

  const renderPass = new RenderPass(scene, camera)
  const bloomComposerCtl = createBloomComposerController(renderer, scene, width, height, [renderPass])

  const finalComposer = new EffectComposer(renderer)
  finalComposer.addPass(renderPass)

  let stopRenderLoop: (() => void) | null = null
  function render() {
    const handle = requestAnimationFrame(render)
    stopRenderLoop = () => cancelAnimationFrame(handle)

    bloomComposerCtl.render()
    finalComposer.render()
  }
  render()

  return {
    onResize() {
      renderer.setSize(container.clientWidth, container.clientHeight)
    },
    destroy() {
      stopRenderLoop?.()

      // It is expected that the rest of the resources will be automatically reclaimed by GC.
      finalComposer.dispose()
      renderer.dispose()

      renderPass.dispose()
      bloomComposerCtl.dispose()

      renderer.domElement.remove()
    },
  }
}
