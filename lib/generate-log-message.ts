import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `creado ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `actualizado ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `borrado ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `acción desconocida ${entityType.toLowerCase()} "${entityTitle}"`;
  }
};
