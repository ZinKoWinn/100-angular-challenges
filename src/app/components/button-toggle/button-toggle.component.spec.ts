import { ButtonMeta } from "./button-meta.modal";
import { ButtonToggleComponent } from "./button-toggle.component";

describe('Button Toggle Component', () => {
    it('exists', () => {
        //assert
        expect(ButtonToggleComponent).toBeDefined();
    });

    describe('General', () => {
        let component: ButtonToggleComponent;

        beforeEach(() => {
            component = new ButtonToggleComponent();
        });

        describe('defaults', () => {
            it('options', () => {
                //assert
                expect(Array.isArray(component.options)).toBe(true);
                expect(component.options.length).toBe(0);
            });
        });

        describe('selected', () => {
            it('select the active option', () => {
                //arrange
                component.options = [
                    new ButtonMeta({ id: '1', title: 'title 1', isActive: false }),
                    new ButtonMeta({ id: '2', title: 'title 2', isActive: true }),
                    new ButtonMeta({ id: '3', title: 'title 3', isActive: false }),
                ];

                //act
                component.selected(component.options[1]);

                //assert
                expect(component.options[0].isActive).toBe(false);
                expect(component.options[1].isActive).toBe(true);
                expect(component.options[0].isActive).toBe(false);
            });

            it('notify parent of the button selection', () => {
                //arrange
                component.options = [
                    new ButtonMeta({ id: '1', title: 'title 1', isActive: false }),
                    new ButtonMeta({ id: '2', title: 'title 2', isActive: true }),
                    new ButtonMeta({ id: '3', title: 'title 3', isActive: false }),
                ];

                component.selection.subscribe((value: ButtonMeta) => {
                    //assert
                    expect(value).toBe(component.options[2]);
                });

                //act
                component.selected(component.options[2]);
            });
        });
    });
});