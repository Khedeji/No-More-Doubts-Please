import React from 'react'
import Widget from './Widget.tsx'
import WidgetTags from './WidgetTags.tsx'
import "./RightSideBar.css"

export default function RightSideBar() {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTags />
    </aside>
  )
}
