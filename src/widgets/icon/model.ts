import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IIConProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
}