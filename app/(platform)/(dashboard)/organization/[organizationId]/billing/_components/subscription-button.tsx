"use client";

import { toast } from "sonner";

import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { useProModal } from "@/hooks/use-pro-modal";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
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
    if (isPro) {
      execute({});
    } else {
      proModal.onOpen();
    }
  };

  return (
    <Button onClick={onClick} variant="primary" disabled={isLoading}>
      {isPro ? "Administrar subscripción" : "Mejorar a pro"}
    </Button>
  );
};
