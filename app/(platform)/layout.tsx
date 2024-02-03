import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider localization={esES}>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
