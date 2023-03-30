import { FC, memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { BannerRender, createBannerRender } from './render'
import styles from './index.module.scss'
import { useInterval, useIsMobile } from '../../../utils/hook'

// eslint-disable-next-line no-underscore-dangle
const _Banner: FC<{ latestBlock?: State.Block }> = () => {
  const isMobile = useIsMobile()
  const ref = useRef<HTMLDivElement>(null)
  const [render, setRender] = useState<BannerRender>()

  useEffect(() => {
    if (!ref.current) return

    const render = createBannerRender(ref.current)
    setRender(render)
    return () => render.destroy()
  }, [])

  useInterval(
    () => {
      render?.onNewBlock({ transactionsCount: 5 } as State.Block)
    },
    5000,
    [render],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => render?.onResize(), [isMobile])

  return (
    <div className={classNames(styles.banner, { [styles.mobile]: isMobile })}>
      <div ref={ref} className={styles.renderer} />
    </div>
  )
}
export const Banner = memo(_Banner, (a, b) => a.latestBlock?.number === b.latestBlock?.number)
