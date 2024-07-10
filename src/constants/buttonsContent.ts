import { filtersSettings } from "./filtersSettings";

interface ButtonProps {
    id: number;
    text: string;
}

export const buttonsContent: Array<ButtonProps> = [
    { id: 1, text: filtersSettings.all },
    { id: 2, text: filtersSettings.active },
    { id: 3, text: filtersSettings.completed },
];
