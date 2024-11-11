import { Drawer } from "vaul";
import CloseIcon from "@/assets/x-mark.svg?react";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ open, children, onClose }: ModalProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black-40" />
        <Drawer.Content className="bg-secondary-bg-color flex flex-col rounded-2xl mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-30">
          <div className="flex justify-end pt-3 px-4">
            <div
              className="flex justify-center items-center rounded-full bg-gray size-7.5"
              onClick={onClose}
            >
              <CloseIcon />
            </div>
          </div>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
