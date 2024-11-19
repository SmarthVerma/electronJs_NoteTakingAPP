import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { MarkdownEditor } from './components/MarkdownEditor'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-xy-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 p-4">
          {/* Wrap editor and additional content */}
          <div className="space-y-4">
            {/* <MarkdownEditor /> */}
            <div className="text-white">content</div> {/* Optional text or content */}
          </div>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
