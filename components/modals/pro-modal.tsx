"use client";

import { toast } from "sonner";
import Image from "next/image";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { useProModal } from "@/hooks/use-pro-modal";
import { useAction } from "@/hooks/use-action";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    execute({});
  };

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
          <Button
            onClick={onClick}
            disabled={isLoading}
            className="w-full"
            variant="primary"
          >
            Mejorar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
