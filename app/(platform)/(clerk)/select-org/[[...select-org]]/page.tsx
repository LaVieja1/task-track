import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganitazionPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
