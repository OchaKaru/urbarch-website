import DropdownMenu from "./dropdown-menu";

const finishes = {
    "PB": "Polished Brass",
    "GP": "Green Patina",
    "BP": "Brown Patina",
    "AB": "Antique Brass",
    "STBL": "Statuary Black",
    "STBR": "Statuary Brown",
    "PN": "Polished Nickel",
    "SN": "Satin Nickel",
    "PC": "Polished Chrome",
    "LP": "Light Pewter",
    "BN": "Black Nickel"
};

export default function FinishesMenu({choices, ...props}) {
    choices = choices.map((choice) => ({
        value: choice.finish,
        display: finishes[choice.finish],
        difference: choice.difference,
        default: choice.default
    }));

    return <DropdownMenu name="Finishes" choices={choices} {...props} />
}