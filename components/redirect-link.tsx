'use client'

import { type ComponentPropsWithoutRef } from 'react'

function getFbp(): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(/(?:^|;\s*)_fbp=([^;]+)/)
  return m ? decodeURIComponent(m[1]) : null
}

function buildRedirectUrl(base: string): string {
  const url = new URL(base)
  const params = new URLSearchParams(window.location.search)
  const fbclid = params.get('fbclid')
  // Build fbc client-side: iOS Safari strips fbclid but not custom fbc param
  if (fbclid) url.searchParams.set('fbc', 'fb.1.' + Date.now() + '.' + fbclid)
  const fbp = getFbp()
  if (fbp) url.searchParams.set('fbp', fbp)
  url.searchParams.set('ref', window.location.href)
  return url.toString()
}

type RedirectLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'>

export function RedirectLink({ href = '#', onClick, children, ...props }: RedirectLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.href = buildRedirectUrl(href)
    onClick?.(e)
  }
  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
