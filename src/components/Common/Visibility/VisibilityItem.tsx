import React from 'react'
import { IconType } from 'react-icons'
import { MdPublic } from 'react-icons/md'
import { JsxElement } from 'typescript'

type VisibilityItemProps = {
  title: string
  subtitle: string
  icon: JSX.Element
  onClick: (e: React.MouseEvent) => void
  selected: boolean
}

const VisibilityItem = ({
  title,
  subtitle,
  icon,
  onClick,
  selected,
}: VisibilityItemProps) => {
  return (
    <div
      className={`dropdown-item ${selected ? 'bg-gray1' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className="mr-4">{icon}</div>
        <p className="text-sm">{title}</p>
      </div>
      <p className="text-gray3 text-xs">{subtitle}</p>
    </div>
  )
}

export default VisibilityItem