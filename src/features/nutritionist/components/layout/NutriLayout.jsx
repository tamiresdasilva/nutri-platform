import AppLayout from "../../../shared/components/layout/AppLayout";
import { nutriMenu } from "./nutriMenu";

export default function NutriLayout({ children }) {
  return <AppLayout menu={nutriMenu}>{children}</AppLayout>;
}
