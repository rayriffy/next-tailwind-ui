import React, { useMemo, useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { useStoreon } from '../../context/storeon'

interface Props {
  title?: string
  description?: string
}

export const HeadTitle: React.FC<Props> = props => {
  const { title, description = 'Next Tailwind template', children } = props

  const router = useRouter()
  const { dispatch } = useStoreon('title')

  const transformedTitle = useMemo(
    () => (title ? `${title} · Next Tailwind UI` : 'Next Tailwind UI'),
    [title]
  )

  useEffect(() => {
    dispatch('title/set', title)
  }, [title])

  return (
    <Head>
      <title key="head-title">{transformedTitle}</title>
      <meta key="title" name="title" content={transformedTitle} />
      <meta key="description" name="description" content={description} />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={router.asPath} />
      <meta key="og:title" property="og:title" content={transformedTitle} />
      <meta key="og:description" property="og:description" content={description} />

      <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="twitter:url" property="twitter:url" content={router.asPath} />
      <meta key="twitter:title" property="twitter:title" content={transformedTitle} />
      <meta key="twitter:description" property="twitter:description" content={description} />

      <link
        key="link-font-inter"
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
        media="screen,print"
      />

      {children}
    </Head>
  )
}
