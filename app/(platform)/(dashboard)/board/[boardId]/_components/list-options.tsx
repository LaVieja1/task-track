"use client";

import { toast } from "sonner";
import { MoreHorizontal, X } from "lucide-react";
import { ElementRef, useRef } from "react";

import { List } from "@prisma/client";
import { useAction } from "@/hooks/use-action";
import { copyList } from "@/actions/copy-list";
import { deleteList } from "@/actions/delete-list";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FormSubmit } from "@/components/form/form-submit";
import { Separator } from "@/components/ui/separator";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`Lista "${data.title}" eliminada`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: (data) => {
      toast.success(`Lista "${data.title}" copiada`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDelete({ id, boardId });
  };

  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeCopy({ id, boardId });
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="h-auto w-auto p-2" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
          <div className="text-sm font-medium text-center text-neutral-600 pb-4">
            Acciones de lista
          </div>
          <PopoverClose ref={closeRef} asChild>
            <Button
              className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
              variant="ghost"
            >
              <X className="h-4 w-4" />
            </Button>
          </PopoverClose>
          <Button
            onClick={onAddCard}
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant="ghost"
          >
            Añadir tarjeta...
          </Button>
          <form action={onCopy}>
            <input hidden name="id" id="id" defaultValue={data.id} />
            <input
              hidden
              name="boardId"
              id="boardId"
              defaultValue={data.boardId}
            />
            <FormSubmit
              variant="ghost"
              className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            >
              Copiar lista...
            </FormSubmit>
          </form>
          <Separator />

          <form action={onDelete}>
            <input hidden name="id" id="id" defaultValue={data.id} />
            <input
              hidden
              name="boardId"
              id="boardId"
              defaultValue={data.boardId}
            />
            <FormSubmit
              variant="ghost"
              className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            >
              Borrar esta lista
            </FormSubmit>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};
