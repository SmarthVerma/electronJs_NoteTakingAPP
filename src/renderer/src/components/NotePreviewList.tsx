import { NotePreview } from '@/components/'
import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (notes.length === 0)
    return (
      <ul className={twMerge('text-center py-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  return (
    <ul {...props} className={className}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTIme}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
