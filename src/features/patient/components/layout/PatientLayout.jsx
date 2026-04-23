import AppLayout from "../../../shared/components/layout/AppLayout";
import { patientMenu } from "./patientMenu";

export default function PatientLayout({ children }) {
  return <AppLayout menu={patientMenu}>{children}</AppLayout>;
}
