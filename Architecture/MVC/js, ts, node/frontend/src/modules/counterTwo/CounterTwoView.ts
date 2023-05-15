import { View } from "../../types/view";

export class CounterTwoView implements View {
    controller: any;
    root: HTMLElement;

    private _title: HTMLElement;
    private _incrementButton: HTMLElement;
    private _decrementButton: HTMLElement;
    private _multipleButton: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
        this.controller = new CounterTwoController();

        this._title = document
    }

    public updateTitle(value: number) {
        this._title.innerText = `Value = ${value}`;
    }

    public mount() {
        this.root.appendChild(this._title);
        this.root.appendChild(this._incrementButton);
        this.root.appendChild(this._decrementButton);
        this.root.appendChild(this._multipleButton);
    }
}