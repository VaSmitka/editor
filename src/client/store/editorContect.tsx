import * as React from 'react'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const EditorContext = React.createContext<any>(null)


function EditorProvider({children}:Props) {
  const [editorViews, setEditorViews] = React.useState({})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {editorViews, setEditorViews}
  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}

export {EditorProvider}