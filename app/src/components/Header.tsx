'use client'

import { ConnectKitButton } from 'connectkit'
import { Logo } from './Logo'
import { Deploy } from './Deploy'

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <Logo />
      <div className="flex items-center gap-8">
        <Deploy />
        <ConnectKitButton />
      </div>
    </div>
  )
}
