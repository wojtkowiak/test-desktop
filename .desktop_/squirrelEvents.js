/**
 * Simple class that allows to hook into Squirrel.Windows events.
 */
export default class SquirrelEvents {
    /**
     * @param {App} App - reference to the App class
     */
    constructor(App) {
        this.App = App;
    }

    /**
     * Invoked during installation.
     */
    install() {
        this.App.createShortcuts();
    }

    /**
     * Invoked on first run.
     */
    firstRun() {
    }

    /**
     * Invoked during update.
     */
    updated() {
        this.App.updateShortcuts();
    }

    /**
     * Invoked during uninstall.
     */
    uninstall() {
        this.App.removeShortcuts();
    }
}
