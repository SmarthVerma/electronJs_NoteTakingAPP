import { NotePreview } from '@/components/'
import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0)
    return (
      <ul className={twMerge('text-center py-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTIme} {...note} />
      ))}
    </ul>
  )
}
