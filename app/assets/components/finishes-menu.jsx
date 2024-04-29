import DropdownMenu from "./dropdown-menu";

export default function FinishesMenu({choices, onChange}) {
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
    choices = choices.map((choice) => ({
        display: finishes[choice.finish],
        difference: choice.difference,
        default: choice.default
    }));

    return <DropdownMenu name="Finishes" choices={choices} onChange={onChange} />
}