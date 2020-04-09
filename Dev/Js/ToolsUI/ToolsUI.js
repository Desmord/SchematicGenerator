const jsPDF = require(`jspdf`);

const DOMObjects = require(`../DOMObjects/DOMObjects.js`).DOMObjects;
const CanvasUI = require(`../CanvasUI/CanvasUI.js`).CanvasUI;
const ToolFabric = require(`../ToolFabric/ToolFabric.js`).ToolFabric;

class ToolsUI {
    constructor() {
        this.ToolFabric = new ToolFabric();
        this.CanvasUI = new CanvasUI();
        this.init()
    }

    init() {
        this.setEvents();
        this.CanvasUI.setTool(this.ToolFabric.getTool(`square`));
    }

    setEvents() {
        this.setMainToolsEvents();
        this.setColorChoosingEvents();
        this.setModalEvents();
        this.setTextAreaEvent();
        this.setPropertiesEvetns();
    }

    setMainToolsEvents() {

        DOMObjects.getMainTools().forEach(button => {
            button.addEventListener(`click`, () => {
                this.changeCurrentActiveButton(button);
                this.CanvasUI.setTool(
                    this.ToolFabric.getTool(
                        button.getAttribute(`tool`)
                    )
                );
            })
        });

    }

    setColorChoosingEvents() {
        this.setColorToolEvents();
        this.setColorPanelEvents();
        this.setColorPanelColorButtonsEvents();
    }

    setColorToolEvents() {
        DOMObjects.getColorChooserButton().addEventListener(`click`, () => {
            this.showColorPanel();
        })
    }

    setColorPanelEvents() {

        DOMObjects.getColorPanel().addEventListener(`mouseleave`, () => {
            this.hideColorPanel();
        })

    }

    setColorPanelColorButtonsEvents() {

        DOMObjects.getColorPanelButtons().forEach(colorButton => {
            colorButton.addEventListener(`click`, e => {
                const selectedColor = window.getComputedStyle(e.target, null).getPropertyValue(`background-color`);

                DOMObjects.getColorChooserButton().childNodes[1].style.color = selectedColor;
                this.ToolFabric.updateColor(selectedColor);
                this.hideColorPanel();
            })
        })

    }

    showColorPanel() {
        const animationTime = 300;

        DOMObjects.getColorPanel().style.display = `grid`;
        DOMObjects.getColorPanel().classList.add(`color-chooser-show-animation`);
        setTimeout(() => {
            DOMObjects.getColorPanel().classList.remove(`color-chooser-show-animation`);
        }, animationTime);
    }

    hideColorPanel() {
        const animationTime = 300;

        DOMObjects.getColorPanel().classList.add(`color-chooser-close-animation`);
        setTimeout(() => {
            DOMObjects.getColorPanel().style.display = `none`;
            DOMObjects.getColorPanel().classList.remove(`color-chooser-close-animation`);
        }, animationTime);
    }

    setModalEvents() {

        DOMObjects.getModalCloseButton().addEventListener(`click`, () => {
            this.hideModal();
        })

        DOMObjects.getModalBackground().addEventListener(`click`, () => {
            this.hideModal();
        })

    }

    /**
     * Displays modal element with given text
     * @param { string } text
     */
    displayModal(text) {
        const animationTime = 300;

        DOMObjects.getModalText().innerHTML = text;
        DOMObjects.getModalConatiner().style.display = `flex`;
        DOMObjects.getModalConatiner().classList.add(`modal-show-animation`);

        setTimeout(() => {
            DOMObjects.getModalConatiner().classList.remove(`modal-show-animation`);
        }, animationTime);
    }

    hideModal() {
        const animationTime = 300;

        DOMObjects.getModalConatiner().classList.add(`modal-close-animation`);
        setTimeout(() => {
            DOMObjects.getModalConatiner().style.display = `none`;
            DOMObjects.getModalConatiner().classList.remove(`modal-close-animation`);
        }, animationTime);
    }

    changeCurrentActiveButton(selectedButton) {
        this.clearAllActiveButton();
        this.setActiveButton(selectedButton);
    }

    setActiveButton(button) {
        const buttonBackgroundNodeIndex = 1;
        button
            .childNodes[buttonBackgroundNodeIndex]
            .classList.add(`tool-button__hover-background--active`);
    }

    clearAllActiveButton() {

        DOMObjects.getMainTools().forEach(button => {
            const buttonBackgroundNodeIndex = 1;
            button
                .childNodes[buttonBackgroundNodeIndex]
                .classList.remove(`tool-button__hover-background--active`);
        });

    }

    setTextAreaEvent() {
        let textArea = DOMObjects.getCanvasTextContainerTextArea();

        textArea.addEventListener(`keyup`, (e) => {
            this.ToolFabric.getTool(`text`).updateText(`${e.target.value}`);
        })
    }

    setPropertiesEvetns() {
        let subbmitButton = DOMObjects.getSubbimtPropertiesButton();
        let widthInput = DOMObjects.getWidthInput();
        let heightInput = DOMObjects.getHeightInput();
        let fontSizeInput = DOMObjects.getFontSizeInput();
        let pdfButton = DOMObjects.getGeneratePDFButton();

        subbmitButton.addEventListener(`click`, () => {
            subbmitButton.children[0].classList.add(`properties-menu-buttons-click-animation`);

            this.ToolFabric.getTool(`text`).updateFontSize(`${fontSizeInput.value}px`)

            DOMObjects.getCanvas().width = `${widthInput.value}`;
            DOMObjects.getCanvas().style.width = `${widthInput.value}px`;
            DOMObjects.getCanvas().height = `${heightInput.value}`;
            DOMObjects.getCanvas().style.height = `${heightInput.value}px`;


            setTimeout(() => {
                subbmitButton.children[0].classList.remove(`properties-menu-buttons-click-animation`);

            }, 1000);
        });

        pdfButton.addEventListener(`click`,()=>{

            let width = DOMObjects.getCanvas().width;
            let height = DOMObjects.getCanvas().height;
            let pdf = null;


            if (width > height) {
                pdf = new jsPDF(`l`, `px`, [width,height]);
            } else {
                pdf = new jsPDF(`p`, `px`, [height, width]);
            }

            width = pdf.internal.pageSize.getWidth();
            height = pdf.internal.pageSize.getHeight();

            let img2 = DOMObjects.getCanvas().toDataURL(`image/jpeg`,1.0);

            pdf.addImage(img2,`JPEG`,0,0,width,height);
            pdf.save(`moj.pdf`)


        })

    }

}

module.exports = {
    ToolsUI
};
