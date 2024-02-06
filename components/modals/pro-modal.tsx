"use client";

import Image from "next/image";

import { useProModal } from "@/hooks/use-pro-modal";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            Mejora tu plan de Task-Track!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Exlora lo mejor de Task-Track
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Tableros ilimitados</li>
              <li>Lista de tareas</li>
              <li>Funciones de admin y seguridad</li>
              <li>Y mas!</li>
            </ul>
          </div>
          <Button className="w-full" variant="primary">
            Mejorar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
