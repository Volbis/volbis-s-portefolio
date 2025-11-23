import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
        {children}
      </Dialog.Content>
    </Dialog.Root>
  );
}
